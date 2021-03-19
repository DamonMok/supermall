<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <template #center>
        <span>购物车({{ length }})</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'

export default {
  name: 'cart',
  components: {
    NavBar
  },
  computed: {
    // 获取购物车商品的数量
    // ...mapGetters(['cartListLength'])
    ...mapGetters({
      length: 'cartListLength'
    })
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>