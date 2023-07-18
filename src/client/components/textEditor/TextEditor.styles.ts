import styled, { css } from 'styled-components';
import { EditorType } from './TextEditor';

export const EditorBox = styled.div<{ $type: EditorType }>`
    background-color: white;
    color: #111;

    ${(props) =>
        props.$type === EditorType.RICH ?
        css`
            margin-top: 1rem;
            
            .quill {
                height: 300px;;
            }
        ` : css`
            margin-bottom: 1rem;
            border-radius: 10px;

            .quill {
                height: 8rem;
            }

            .ql-container.ql-snow {
                border-width: 0;
            }

            .ql-syntax {
                display: inline-block;
            }
        `}
    
    .code-link {
        display: inline-block;
        padding: 2px;
        background-color: var(--text-light-color);
    } 
`
