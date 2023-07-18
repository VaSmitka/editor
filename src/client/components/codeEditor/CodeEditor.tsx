import { useLayoutEffect, createRef, createContext, useContext } from 'react';
import { getOrCreateEditor } from './getOrCreateEditor';
import { EditorContext } from '@app/store/editorContect';

export interface EditorProps {
  activeFileId?: any,
  fileId?: any, 
  shareDBDoc: any, 
  localPresence: any, 
  docPresence: any
}

export const editorState = createContext(null);

export const CodeEditor = ({ activeFileId, shareDBDoc, localPresence, docPresence }:EditorProps) => {
  const ref = createRef<HTMLDivElement>();
  const {editorViews, setEditorViews} = useContext(EditorContext)


  // useEffect was buggy in that sometimes ref.current was undefined.
  // useLayoutEffect seems to solve that issue.
  useLayoutEffect(() => {
    const editor = getOrCreateEditor({
      fileId: activeFileId,
      shareDBDoc,
      localPresence,
      docPresence,
    })

    // set editors to context
    if (!editorViews[activeFileId]) {
      const newEditors = {...editorViews}
      newEditors[activeFileId] = editor;
      setEditorViews(newEditors)
    }

    if (ref.current) ref.current.replaceChildren(editor.dom);

    return () => {
      if (ref.current) ref.current.innerHTML = '';
    };
  }, [shareDBDoc, activeFileId]);

  return <div className="editor" ref={ref} />;
};
