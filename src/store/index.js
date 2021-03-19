import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      console.log(payload);
      // 查找商品在购物车中是否已存在
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)

      if (oldProduct) {
        oldProduct.count += 1
        console.log("更新成功");
      } else {
        payload.count = 1
        state.cartList.push(payload)
        console.log("添加成功");
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
