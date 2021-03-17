<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar></detail-nav-bar>

    <!-- 轮播图 -->
    <detail-swiper :topImages="topImages"></detail-swiper>

  </div>
</template>

<script>
import DetailNavBar from 'views/detail/childComps/DetailNavBar'
import DetailSwiper from 'views/detail/childComps/DetailSwiper'
import {getDetailDatas} from 'network/detail'

export default {
  name: 'detail',
  data() {
    return {
      id: null,
      topImages: []
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    // 获取当前商品的id
    this.id = this.$route.params.id

    // 获取轮播图数据
    getDetailDatas(this.id).then(res => {
      this.topImages = res.data.result.itemInfo.topImages
    })
  }
};
</script>