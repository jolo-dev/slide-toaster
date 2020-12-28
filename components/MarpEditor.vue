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

export default {
  components: {
    editor: Editor,
  },
  data() {
    return {
      editorText: '<!-- theme: my-first-theme --> \n # Hello World',
      editorOptions: {
        hideModeSwitch: true,
      },
    }
  },

  methods: {
    getMarkdown() {
      const markdown = this.$refs.toastuiEditor.invoke('getMarkdown')
      this.$store.commit('markdown/add', markdown)
      return markdown
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
