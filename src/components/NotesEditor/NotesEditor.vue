<script setup lang="ts">
import { TextBold, TextItalic, Strikethrough } from '@icon-park/vue-next'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { ColorHighlighter } from './extensions/ColorHighlighter'

const editor = useEditor({
  extensions: [
    StarterKit.configure({
      bold: {
        HTMLAttributes: {
          class: 'custom-bold'
        }
      }
    }),
    ColorHighlighter
  ],
  content: `
    <p>I’m <em>running</em> Tiptap <s>with</s> Vue.js. 🎉</p>
    <p><strong>You</strong> can also teach the editor new things. For example to recognize hex colors and add a color</p>
    <p> swatch on the fly: #FFF, #0D0D0D, #616161, #A975FF, #FB5151, #FD9170, #FFCB6B, #68CEF8, #80cbc4, #9DEF8F </p>
  `
})
</script>

<template>
  <div class="notes-editor-wrapper">
    <div class="notes-editor-header">
      <button
        class="notes-editor-header-button"
        @click="editor?.chain().focus().toggleBold().run()"
      >
        <text-bold />
      </button>
      <button
        class="notes-editor-header-button"
        @click="editor?.chain().focus().toggleItalic().run()"
      >
        <text-italic />
      </button>
      <button
        class="notes-editor-header-button"
        @click="editor?.chain().focus().toggleStrike().run()"
      >
        <strikethrough />
      </button>
    </div>
    <editor-content class="notes-editor-content" :editor="editor" />
  </div>
</template>

<style scoped>
.notes-editor-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 4;
  height: 100%;
  border: 1px solid var(--color-gray-300);
  border-radius: 6px;
}

.notes-editor-header {
  display: flex;
  padding: 8px 12px;
  font-size: var(--font-size-large);
  background-color: var(--color-gray-200);
}

.notes-editor-header-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  background-color: transparent;
}

.notes-editor-header-button:hover {
  background-color: var(--color-gray-300);
}

.notes-editor-content {
  width: 100%;
  height: 100%;
  font-size: 14px;
  padding: 8px 12px;
}
</style>
