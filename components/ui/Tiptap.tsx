'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Editor from './Editor'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Strike from '@tiptap/extension-strike'
import Italic from '@tiptap/extension-italic'
import LinkExtension from '@tiptap/extension-link'


const Tiptap = ({

    description,
    onChange

}: {
    description: string,
    onChange: (richtext: string) => void
}) => {
    const editor = useEditor({

        extensions: [
            StarterKit,
            Heading.configure({
                levels: [1, 2, 3, 4],
            }),
            BulletList,
            OrderedList,
            Strike,
            Italic,
            LinkExtension.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol: 'https',
            })
        ],
        content: description,
        onUpdate({ editor }) {
            onChange(editor.getHTML())
        },
        editorProps: {
            attributes: {
                class: "prose border min-h-40 border-input p-2 leading-none"
            }
        }
    })

    return <>
        <Editor editor={editor} />
        <EditorContent editor={editor} />
    </>
}

export default Tiptap
