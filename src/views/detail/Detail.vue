<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar class="nav-bar" @didClickedNavBar="didClickedNavBar" ref="navBar"></detail-nav-bar>

    <scroll class="scroll" ref="scroll" :probeType="3" :listenScroll="true" @scroll="scrolling">
      <!-- 轮播图 -->
      <detail-swiper :topImages="topImages"></detail-swiper>

      <!-- 商品基本信息 -->
      <detail-base-info :goods="goods"></detail-base-info>

      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>

      <!-- 商品的详情信息 -->
      <detail-goods-info :detailInfo="detailInfo" @didLoadedImages="didLoadedImages"></detail-goods-info>

      <!-- 商品参数信息 -->
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>

      <!-- 评论 -->
      <detail-comment :commentInfo="commentInfo" ref="comment"></detail-comment>

      <!-- 推荐 -->
      <goods-list :goods="recommends" ref="recommends"></goods-list>
    </scroll>

    <!-- 底部 -->
    <detail-bottom-bar class="bottom-bar"></detail-bottom-bar>

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
import DetailBottomBar from 'views/detail/childComps/DetailBottomBar'
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
      themeOffsetY: [],  // 记录商品、参数、评论、推荐组件的offsetY
      currentIndex: 0
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
    GoodsList,
    DetailBottomBar
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
      // console.log(res.data.data.list);
      this.recommends = res.data.data.list
    })
  },
  methods: {
    // 获取商品、参数、评论、推荐组件的offsetY
    getThemeOffsetY() {
      this.themeOffsetY = []
      this.themeOffsetY.push(0)
      this.themeOffsetY.push(this.$refs.param.$el.offsetTop)
      this.themeOffsetY.push(this.$refs.comment.$el.offsetTop)
      this.themeOffsetY.push(this.$refs.recommends.$el.offsetTop)
      this.themeOffsetY.push(Number.MAX_VALUE)
      console.log(this.themeOffsetY);
    },

    // 
    didLoadedImages() {
      this.getThemeOffsetY()
    },

    didClickedNavBar(index) {
      // 组件根据点击导航进行联动
      this.$refs.scroll.scrollTo(0, -this.themeOffsetY[index]+44, 500)
    },

    // 滚动监听
    scrolling(position) {
      // 导航根据组件滚动位置进行联动
      for (let i = 0; i < this.themeOffsetY.length-1; i++) {  
        if (this.currentIndex != i && (-position.y>=this.themeOffsetY[i] && -position.y<this.themeOffsetY[i+1])) {
          this.currentIndex = i
          this.$refs.navBar.currentIndex = i
        }
      }
    },
  }
};

// const l = [1, 2, 3, 5, 8]
// console.log(l.indexOf(6));

</script>

<style lang="postcss" scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .scroll {
    height: calc(100% - 44px - 58px);
    overflow: hidden;
  }

  .nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

</style>