<template>
  <div>
    <style>
      {{renderSlides.css}}
    </style>
    <div v-html="renderSlides.html"></div>
  </div>
</template>

<script>
import { Marpit, Element } from '@marp-team/marpit'

export default {
  data: () => {
    return {
      marp: Marpit,
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
    this.marp = new Marpit({
      markdown: {
        xhtmlOut: true, // Enable HTML tags
        breaks: true, // Convert line breaks into `<br />`,
      },
      inlineSVG: true,
      container: [
        new Element('article', { id: 'preview' }),
        new Element('div', { class: 'slides' }),
      ],
      slideContainer: new Element('div', { class: 'slide' }),
    })
    this.marp.themeSet.add(`
    /* @theme my-first-theme */

    section {
      background-color: #123;
      color: white;
      font-size: 30px;
      padding: 40px;
      height: 100vh;
    }

    h1 {
      color: #8cf;
    }
    `)
  },
}
</script>

<style>
#preview {
  padding: 5%;
}
</style>
