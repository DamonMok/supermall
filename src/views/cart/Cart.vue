<template>
  <div id="cart">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <template #center>
        <span>购物车({{ length }})</span>
      </template>
    </nav-bar>

    <!-- 商品列表 -->
    <scroll class="scroll" ref="scroll">
      <cart-list></cart-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import {mapGetters} from 'vuex'

import CartList from './childComps/CartList'

export default {
  name: 'cart',
  components: {
    NavBar,
    CartList,
    Scroll
  },
  computed: {
    // 获取购物车商品的数量
    // ...mapGetters(['cartListLength'])
    ...mapGetters({
      length: 'cartListLength'
    })
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  #cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }

  .scroll {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>