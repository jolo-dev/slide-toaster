<template>
  <div>
    <div v-html="renderSlides.html"></div>
  </div>
</template>

<script>
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css'
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
      const { html } = this.marp.render(markdown)
      return { html }
    },
  },
  created() {
    this.marp = new Marpit({
      container: [
        new Element('div', { class: 'reveal' }),
        new Element('div', { class: 'slides' }),
      ],
    })
  },
  mounted() {
    Reveal.initialize()
  },
}
</script>

<style lang="scss">
.reveal {
  height: 100vh;
}
</style>
