import fs from 'fs'
import { json1Presence, shareDBBackend } from '../app'
import { computeInitialDocument } from './computeInitialDocument'
import { createNeededFiles } from './fileService'
import { createBranch, getBranchOid, getFilesFromBranchFolder } from './githubAdapter'

// https://nodejs.dev/en/learn/reading-files-with-nodejs/

export const initialConnection = async (collectionId:string) => {
  // The time in milliseconds by which auto-saving is debounced.
  const autoSaveDebounceTimeMS = 800
  const lessonPath = `/public/studentDirectory/${collectionId}`
  const emptyTemplateFolder = 'empty-template'

  const idParts = collectionId.split('-');
  // need two parts
  const neededName = idParts[0] === 'edit' ? 'lector' : `student-${idParts[0]}`;
  const neededBranch = `refs/heads/${neededName}`;

  const githubBranch = await getBranchOid(neededName);

  if (!githubBranch) {
    const oid = await getBranchOid('main');
    await createBranch(neededBranch, oid!);
  }

  let files = await getFilesFromBranchFolder(`${neededName}:lesson-${idParts[1]}`);

  if (!files) {
    if (neededName === 'lector') {
      files = await getFilesFromBranchFolder(`${neededName}:${emptyTemplateFolder}`);
    } else {
      files = await getFilesFromBranchFolder(`lector:lesson-${idParts[1]}`);
      
      // lesson isnt ready
      if (!files) return { error: {message: "not ready yet"}}
    }
  }

  // console.log(collectionId, neededBranch, githubBranch, files)

  createNeededFiles(lessonPath, files!);

  const initialDocument = computeInitialDocument({
    // Use the current working directory to look for files.
    fullPath: process.cwd() + lessonPath
  })

  // Create the initial "document",
  // which is a representation of files on disk.ß
  const shareDBConnection = shareDBBackend.connect()
  // @ts-ignore
  const agentsCount = shareDBConnection.agent?.backend.agentsCount
  // console.log('agentsCount', agentsCount)

  const shareDBDoc = shareDBConnection.get(collectionId, '1')
  shareDBDoc.create(initialDocument, json1Presence.type.uri)

  // The state of the document when files were last auto-saved.
  let previousDocument = initialDocument

  // Saves the files that changed.
  const save = () => {
    const currentDocument = shareDBDoc.data

    // Take a look at each file (key) previously and currently.
    const allKeys = Object.keys({ ...currentDocument, ...previousDocument })
    for (const key of allKeys) {
      const previous = previousDocument[key]
      const current = currentDocument[key]

      // Handle changing of text content.
      if (previous?.text && current?.text && previous.text !== current.text) {
        fs.writeFileSync(`.${lessonPath}/${current.name}`, current.text)
      }
    }
    previousDocument = currentDocument
  }

  // Listen for when users modify files.
  // Files get written to disk after `autoSaveDebounceTimeMS`
  // milliseconds of inactivity.
  let timeout: string | number | NodeJS.Timeout | undefined
  shareDBDoc.subscribe(() => {
    shareDBDoc.on('op', (op) => {
      clearTimeout(timeout)
      timeout = setTimeout(save, autoSaveDebounceTimeMS)
    })
  })

  return {
    collection: collectionId,
    documentId: '1'
  }
}
