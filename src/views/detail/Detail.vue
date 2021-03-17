<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav-bar></detail-nav-bar>

    <!-- 轮播图 -->
    <detail-swiper :topImages="topImages"></detail-swiper>

    <!-- 轮播图下方数据 -->
    <detail-base-info :goods="goods"></detail-base-info>

  </div>
</template>

<script>
import DetailNavBar from 'views/detail/childComps/DetailNavBar'
import DetailSwiper from 'views/detail/childComps/DetailSwiper'
import DetailBaseInfo from 'views/detail/childComps/DetailBaseInfo'
import {getDetailDatas, Goods} from 'network/detail'

export default {
  name: 'detail',
  data() {
    return {
      id: null,
      topImages: [],  // 轮播图
      goods: {}  // 轮播图下方数据
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  created() {
    // 获取当前商品的id
    this.id = this.$route.params.id

    
    getDetailDatas(this.id).then(res => {
      const data = res.data.result

      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages

      //2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    })
  }
};
</script>