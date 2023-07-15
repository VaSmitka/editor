import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import * as S from './TextEditor.styles';
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  text: string | undefined,
  changeHandler: any
}

export const TextEditor: React.FC<TextEditorProps> = ({text, changeHandler}) => {
  return (
    <S.EditorBox className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={text}
        onChange={changeHandler}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
        style={{height: '300px'}}
      />
    </S.EditorBox>
  );
};

export default TextEditor;