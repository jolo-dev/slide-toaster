import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'toast-slide-markdown',
    paths: ['markdown'],
  })(store)
}
