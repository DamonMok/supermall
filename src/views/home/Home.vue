<template>
  <div id="home">
    <!-- 导航 -->
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>

    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper'

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
    HomeSwiper
  },
  created() {
    getHomeDatas().then(res => {
      this.banners = res.data.data.banner.list,
      this.recommend = res.data.data.recommend.list
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>