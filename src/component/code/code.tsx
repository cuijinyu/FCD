import React, { useRef, useEffect, FC } from 'react';
import { editor } from 'monaco-editor';

interface CodeProps {
    content: string,
    height?: string,
    language: string,
    editAble: boolean    
}

const createEditor = (ref: HTMLElement, content: string, languageType: string, editAble: boolean) => {
    editor.create(ref, {
        theme: 'vs',
        value: content,
        language: languageType,
        lineNumbers: 'on',
        lineHeight: 30,
        fontSize: 18,
        readOnly: !editAble
    })
}

const Code:FC<CodeProps> = (props) => {
    let editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            createEditor(editorRef.current as unknown as HTMLElement, props.content.trim(), props.language, props.editAble);
        }
    }, [])

    return (
        <div className='code-playground'
            style={{
                width: '80%',
                minHeight: props.height || '400px'
            }}
            ref={editorRef}>
        </div>
    )
};

export default Code;