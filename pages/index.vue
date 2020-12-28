<template>
  <div class="container">
    <marp-editor />
    <marp-slides />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MarpEditor from '~/components/MarpEditor.vue'
import MarpSlides from '~/components/MarpSlides.vue'

export default Vue.extend({
  components: { MarpEditor, MarpSlides },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-columns: 1fr 1fr;
}
</style>
