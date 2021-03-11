<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :goodsItem=item :key="index"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem"

export default {
  components: {
      GoodsListItem
    },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>