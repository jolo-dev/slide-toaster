<template>
  <div>
    <editor
      id="editor"
      ref="toastuiEditor"
      :initial-value="editorText"
      :options="editorOptions"
      initial-edit-type="markdown"
      height="100vh"
      preview-style="tab"
      @change="getMarkdown"
    />
  </div>
</template>
<script>
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor } from '@toast-ui/vue-editor'
import uml from '@toast-ui/editor-plugin-uml'

export default {
  components: {
    editor: Editor,
  },
  data() {
    return {
      editorText:
        this.$store.state.markdown.markdown === ''
          ? '<!-- theme: my-first-theme --> \n # Hello World'
          : this.$store.state.markdown.markdown,
      editorOptions: {
        hideModeSwitch: true,
        plugins: [uml],
      },
    }
  },
  mounted() {
    this.$refs.toastuiEditor
      .invoke('getUI')
      .getToolbar()
      .insertItem(-1, {
        type: 'button',
        options: {
          className: 'presenter',
          event: 'presentButtom',
          tooltip: 'Present',
          text: 'Pr',
          style: 'background:none;color:black;',
        },
      })
    document.querySelector('.presenter').addEventListener('click', () => {
      this.$router.push({ path: '/present' })
    })
  },
  methods: {
    getMarkdown() {
      const markdown = this.$refs.toastuiEditor.invoke('getMarkdown')
      this.$store.commit('markdown/add', markdown)
      return markdown
    },
    present() {
      alert('Hello World')
    },
  },
}
</script>

<style>
#editor {
  position: fixed;
  top: 0;
  width: 50%;
}
</style>
