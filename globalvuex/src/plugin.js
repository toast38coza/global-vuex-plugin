import store from '.'
const MyStore = {
  store,
  install (Vue, options) {
    Vue.$myStore = store
  }
}

export default MyStore
