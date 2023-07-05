import fs from 'fs'
import { json1Presence, shareDBBackend } from "../app";
import { computeInitialDocument } from "./computeInitialDocument";

export const initialConnection = () => {
    // The time in milliseconds by which auto-saving is debounced.
    const autoSaveDebounceTimeMS = 800;

    const initialDocument = computeInitialDocument({
        // Use the current working directory to look for files.
        fullPath: process.cwd() + '/public/studentDirectory',
    });

    // Create the initial "document",
    // which is a representation of files on disk.ß
    const shareDBConnection = shareDBBackend.connect();
    // @ts-ignore
    const agentsCount = shareDBConnection.agent?.backend.agentsCount;
    console.log('agentsCount', agentsCount)
    const shareDBDoc = shareDBConnection.get('documents', '1');
    shareDBDoc.create(initialDocument, json1Presence.type.uri);


    // The state of the document when files were last auto-saved.
    let previousDocument = initialDocument;

    // Saves the files that changed.
    const save = () => {
        const currentDocument = shareDBDoc.data;

        // Take a look at each file (key) previously and currently.
        const allKeys = Object.keys({ ...currentDocument, ...previousDocument });
        for (const key of allKeys) {
            const previous = previousDocument[key];
            const current = currentDocument[key];

            // Handle changing of text content.
            if (previous?.text && current?.text && previous.text !== current.text) {
                fs.writeFileSync(`./public/studentDirectory/${current.name}`, current.text);
            }
        }
        previousDocument = currentDocument;
    };

    // Listen for when users modify files.
    // Files get written to disk after `autoSaveDebounceTimeMS`
    // milliseconds of inactivity.
    let timeout: string | number | NodeJS.Timeout | undefined;
    shareDBDoc.subscribe(() => {
        shareDBDoc.on('op', (op) => {
            clearTimeout(timeout);
            timeout = setTimeout(save, autoSaveDebounceTimeMS);
        });
    });

    return {
        collection: 'documents',
        documentId: '1'
    }
}