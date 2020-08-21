export default {
  addcart(context, payload) {
    //payload是新添加的商品
    let oldObj = null
    //先对已有数组做个遍历
    for (let item of context.state.cartlist) {
      //判断传入的新商品是否已经在购物车中
      if (item.iid === payload.iid) {
        //如有 则将新传入的商品赋值给oldObj 如没有 则oldObj为空
        oldObj = item
      }
    }
    //遍历完发现 如已经在购物车当中则计数加1
    if (oldObj) {
      context.commit('addcount', oldObj)
    } else {
      payload.count = 1
      context.commit('addcartlist', payload)

    }
  }
}
