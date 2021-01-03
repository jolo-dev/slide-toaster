<template>
  <div>
    <style>
      {{renderSlides.css}}
    </style>
    <div v-html="renderSlides.html"></div>
  </div>
</template>

<script>
import { Marp } from '@marp-team/marp-core'

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

<style lang="scss" scoped></style>
