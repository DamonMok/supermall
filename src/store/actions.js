import {UPDATE_COUNT, ADD_TO_CART} from "./mutation-types"

export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 查找商品在购物车中是否已存在
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      if (oldProduct) {
        // 已存在，数量+1
        context.commit(UPDATE_COUNT, oldProduct)
        resolve('商品数量+1')
      } else {
        // 未存在，加入购物车
        context.commit(ADD_TO_CART, payload)
        resolve('商品+1')
      }
    })
  }
}