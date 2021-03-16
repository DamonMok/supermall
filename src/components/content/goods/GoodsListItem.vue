<template>
  <div class="goods-list-item" @click="didClickedGoodsItem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    didClickedGoodsItem() {
      this.$router.push("/detail/" + this.goodsItem.iid)
    }
  }
};
</script>

<style scoped>
  .goods-list-item {
    width: 48%;
    padding-bottom: 6px;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 10px;
  }

  .goods-info {
    font-size: 12px;
    text-align: center;
  }

  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .cfav {
    position: relative;
  }

  .goods-info .cfav::before {
    position: absolute;
    content: " ";
    top: 0;
    left: -15px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>