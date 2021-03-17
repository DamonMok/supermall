<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar class="nav-bar"></detail-nav-bar>

    <scroll class="scroll">
      <!-- 轮播图 -->
      <detail-swiper :topImages="topImages"></detail-swiper>

      <!-- 商品基本信息 -->
      <detail-base-info :goods="goods"></detail-base-info>

      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>

      <!-- 商品的详情信息 -->
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
    </scroll>

  </div>
</template>

<script>
import DetailNavBar from 'views/detail/childComps/DetailNavBar'
import DetailSwiper from 'views/detail/childComps/DetailSwiper'
import DetailBaseInfo from 'views/detail/childComps/DetailBaseInfo'
import DetailShopInfo from 'views/detail/childComps/DetailShopInfo'
import DetailGoodsInfo from 'views/detail/childComps/DetailGoodsInfo'

import {getDetailDatas, Goods, Shop} from 'network/detail'
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'detail',
  data() {
    return {
      id: null,
      topImages: [],  // 轮播图
      goods: {},  // 轮播图下方数据
      shop: {},  // 店铺信息
      detailInfo: {},  // 商品详情
    };
  },
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
  },
  created() {
    // 获取当前商品的id
    this.id = this.$route.params.id

    
    getDetailDatas(this.id).then(res => {
      const data = res.data.result

      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages

      //2.获取商品基本信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //3.获取店铺信息
      this.shop = new Shop(data.shopInfo)

      //4.获取商品的详情信息
      this.detailInfo = data.detailInfo
    })
  }
};
</script>

<style lang="postcss" scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .scroll {
    height: calc(100% - 44px);
  }

  .nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>