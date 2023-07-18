import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modulesRich, modulesTextarea, formats } from "./EditorToolbar";
import * as S from './TextEditor.styles';
import "react-quill/dist/quill.snow.css";

export enum EditorType {
  TEXTAREA='TEXTAREA',
  RICH='RICH'
}

interface TextEditorProps {
  type: EditorType,
  text: string | undefined,
  changeHandler: any
}

export const TextEditor: React.FC<TextEditorProps> = ({type, text, changeHandler}) => {
  return (
    <S.EditorBox className="text-editor" $type={type}>
      {type === EditorType.RICH && <EditorToolbar />}
      <ReactQuill
        theme="snow"
        value={text}
        onChange={changeHandler}
        placeholder={"Napište něco..."}
        modules={type === EditorType.RICH ? modulesRich : modulesTextarea}
        formats={formats}
      />
    </S.EditorBox>
  );
};

export default TextEditor;