import {UPDATE_COUNT, ADD_TO_CART} from "./mutation-types"

export default {
  [UPDATE_COUNT](state, payload) {
    // 购物车已存在商品，数量+1
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    // 购物车未存在该商品，加入
    payload.checked = true
    payload.count = 1
    state.cartList.push(payload)
  }
}