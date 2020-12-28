export const state = () => ({
  markdown: '',
})

export const mutations = {
  add(state, markdown) {
    state.markdown = markdown
  },
}
