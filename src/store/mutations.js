export default {
  addcount(state, payload) {
    payload.count++
  },
  addcartlist(state, payload) {
    payload.checked = true
    state.cartlist.push(payload)

  }
}
