<template>
  <div>
    <style>
      {{renderSlides.css}}
    </style>
    <div id="preview" class="reveal" v-html="renderSlides.html"></div>
  </div>
</template>

<script>
import { Marp } from '@marp-team/marp-core'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'
export default {
  data: () => {
    return {
      marp: Marp,
    }
  },
  computed: {
    renderSlides() {
      const markdown = this.$store.state.markdown.markdown
      const { html, css } = this.marp.render(markdown)
      return { html, css }
    },
  },
  created() {
    this.marp = new Marp({
      html: true,
      markdown: {
        // xhtmlOut: true, // Enable HTML tags
        breaks: false, // Convert line breaks into `<br />`,
      },
      emoji: {
        shortcode: true,
        unicode: false,
        twemoji: {
          base: '/resources/twemoji/',
        },
      },
    })
    this.marp.themeSet.add(`
    /* @theme my-first-theme */

    section {
      background-color: #123;
      color: white;
      font-size: 30px;
    }

    h1 {
      color: #8cf;
    }
    `)
  },
}
</script>

<style lang="scss">
@import url('node_modules/reveal.js/dist/theme/white.css');

#preview {
  padding: 5%;
  svg[data-marpit-svg] {
    margin-bottom: 2%;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.12), 0 3px 4px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5),
        0 10px 10px rgba(0, 0, 0, 0.45);
    }
  }
  code foreignObject {
    width: 100%;
    height: 200px;
  }
}
</style>
