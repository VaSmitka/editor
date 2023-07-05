import { useLayoutEffect, createRef } from 'react';
import { getOrCreateEditor } from './getOrCreateEditor';
import { createReducer } from '@reduxjs/toolkit';

export const CodeEditor = ({ activeFileId, shareDBDoc, localPresence, docPresence }) => {
  const ref = createRef<HTMLDivElement>();

  // useEffect was buggy in that sometimes ref.current was undefined.
  // useLayoutEffect seems to solve that issue.
  useLayoutEffect(() => {
    const editor = getOrCreateEditor({
      fileId: activeFileId,
      shareDBDoc,
      localPresence,
      docPresence,
    });
    if (ref.current) ref.current.appendChild(editor.dom);

    return () => {
      if (ref.current) ref.current.removeChild(editor.dom);
    };
  }, [shareDBDoc, activeFileId]);

  return <div className="editor" ref={ref} />;
};
