<template>
  <div id="home">
    <!-- 导航 -->
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>

    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>

    <!-- 4个推荐 -->
    <home-recommend :recommends="recommend"></home-recommend>

    <!-- 本周流行 -->
    <home-feature></home-feature>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFeature from './childComps/HomeFeature'

import {getHomeDatas} from 'network/home';

export default {
  name: 'Home',
  data() {
    return {
      banners: null,
      recommend: null,
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature
  },
  created() {
    getHomeDatas().then(res => {
      this.banners = res.data.data.banner.list,
      this.recommend = res.data.data.recommend.list
    })
  }
}
</script>

<style scoped>

  #home {
    padding-top: 44px;
    padding-bottom: 400px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>