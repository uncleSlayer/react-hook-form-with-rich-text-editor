'use client'
import React, { useState } from 'react'
import { type Editor as EditorType } from '@tiptap/react'
import { Toggle } from "@/components/ui/toggle"
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Link
} from 'lucide-react'
import clsx from 'clsx'

const Editor = ({
    editor
}: {
    editor: EditorType | null,
}) => {

    const [url, setUrl] = useState('');

    if (!editor) return null

    const handleLinkToggle = () => {
        if (editor.isActive('link')) {
            editor.chain().focus().unsetLink().run();
        } else {
            const linkUrl = prompt('Enter the URL', url) || '';
            if (linkUrl) {
                editor.chain().focus().setLink({ href: linkUrl }).run();
                setUrl(linkUrl);
            }
        }
    }

    return (
        <div className='border rounded-md p-2 flex flex-wrap'>
            {/* Bold */}
            <Toggle
                size="sm"
                pressed={editor.isActive('bold')}
                onPressedChange={() => editor.chain().focus().toggleBold().run()}
            >
                <Bold className="h-4 w-4" />
            </Toggle>

            {/* Italic */}
            <Toggle
                size="sm"
                pressed={editor.isActive('italic')}
                onPressedChange={() => editor.chain().focus().toggleItalic().run()}
            >
                <Italic className="h-4 w-4" />
            </Toggle>

            {/* Strikethrough */}
            <Toggle
                size="sm"
                pressed={editor.isActive('strike')}
                onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            >
                <Strikethrough className="h-4 w-4" />
            </Toggle>

            {/* Heading 1 */}
            <Toggle
                size="sm"
                pressed={editor.isActive('heading', { level: 1 })}
                onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            >
                <Heading1 className="h-4 w-4" />
            </Toggle>

            {/* Heading 2 */}
            <Toggle
                size="sm"
                pressed={editor.isActive('heading', { level: 2 })}
                onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            >
                <Heading2 className="h-4 w-4" />
            </Toggle>

            {/* Heading 3 */}
            <Toggle
                size="sm"
                pressed={editor.isActive('heading', { level: 3 })}
                onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            >
                <Heading3 className="h-4 w-4" />
            </Toggle>

            {/* Heading 4 */}
            <Toggle
                size="sm"
                pressed={editor.isActive('heading', { level: 4 })}
                onPressedChange={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            >
                <Heading4 className="h-4 w-4" />
            </Toggle>

            {/* Unordered List */}
            <Toggle
                size="sm"
                pressed={editor.isActive('bulletList')}
                onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
            >
                <List className="h-4 w-4" />
            </Toggle>

            {/* Ordered List */}
            <Toggle
                size="sm"
                pressed={editor.isActive('orderedList')}
                onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
            >
                <ListOrdered className="h-4 w-4" />
            </Toggle>

            {/* Link Toggle */}
            <Toggle
                size="sm"
                pressed={editor.isActive('link')}
                onPressedChange={handleLinkToggle}
            >
                <Link className="h-4 w-4" />
            </Toggle>
        </div>
    )
}

export default Editor