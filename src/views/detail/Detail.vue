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

      <!-- 商品参数信息 -->
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>

      <!-- 评论 -->
      <detail-comment :commentInfo="commentInfo"></detail-comment>

      <!-- 推荐 -->
      <goods-list :goods="recommends" ref="recommends"></goods-list>
    </scroll>

  </div>
</template>

<script>
import DetailNavBar from 'views/detail/childComps/DetailNavBar'
import DetailSwiper from 'views/detail/childComps/DetailSwiper'
import DetailBaseInfo from 'views/detail/childComps/DetailBaseInfo'
import DetailShopInfo from 'views/detail/childComps/DetailShopInfo'
import DetailGoodsInfo from 'views/detail/childComps/DetailGoodsInfo'
import DetailParamInfo from 'views/detail/childComps/DetailParamInfo'
import DetailComment from 'views/detail/childComps/DetailComment'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetailDatas, getRecommend, Goods, Shop, GoodsParam} from 'network/detail'
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
      paramInfo: {},  // 参数
      commentInfo: {},  // 评论
      recommends: [],  // 推荐
    };
  },
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    GoodsList
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

      //5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //6.获取评论信息
      this.commentInfo = data.rate.list[0]
    })

    //7.获取推荐
    getRecommend().then((res)=> {
      console.log(res.data.data.list);
      this.recommends = res.data.data.list
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
    overflow: hidden;
  }

  .nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>