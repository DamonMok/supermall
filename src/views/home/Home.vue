<template>
  <div id="home">
    <!-- 导航 -->
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>

    <!-- 悬浮（流行、新款、精选 tab-control） -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControlCeiling" v-show="showTabControlCeiling">
      </tab-control>

    <scroll ref="scroll" class="scroll" 
            :probeType="3" :listenScroll="true" @scroll="scrolling" 
            :pullup="true" @scrollToEnd="loadMore">
      <!-- 轮播图 -->
      <home-swiper :banners="banners" @didLoadedImage="didLoadedImage"></home-swiper>

      <!-- 4个推荐 -->
      <home-recommend :recommends="recommend"></home-recommend>

      <!-- 本周流行 -->
      <home-feature></home-feature>

      <!-- 流行、新款、精选 tab-control -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl">
      </tab-control>

      <!-- 商品列表 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backTop" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll"
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop"

import { getHomeDatas, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: null,
      recommend: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop',  // 当前商品信息的类型
      showBackTop: false,  // 是否滚动到顶部
      tabControlOffsetTop: 0,  // tabControl的Y偏移量
      showTabControlCeiling: false,  // 是否展示吸顶的tabControl
      offsetY: 0  // 当前滚动的Y值
    };
  },
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop
  },
  created() {
    // 获取首页数据
    this.getHomeDatas()

    // 获取商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.offsetY, 0)
  },
  deactivated() {
    this.offsetY = this.$refs.scroll.scroll.y
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
        default:
          break;
      }
      // console.log(this.currentType);
      this.$refs.tabControlCeiling.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    },

    getHomeDatas() {
      getHomeDatas().then((res) => {
        this.banners = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list); // 使用js的数组解构
        this.goods[type].page += 1;
      });
    },

    // 滚动到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },

    // 滚动监听
    scrolling(position) {
      this.showBackTop = (-position.y) > 1000  // 显示或隐藏滚动到顶部的按钮

      this.showTabControlCeiling = (-position.y) >this.tabControlOffsetTop ? true:false
    },

    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType)
    },

    // 图片加载完的监听回调
    didLoadedImage() {
      // 记录tabControl的Y方向偏移位置
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.tab-control {
  position: sticky;
  top: 44px;
}

.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden ;
}
</style>