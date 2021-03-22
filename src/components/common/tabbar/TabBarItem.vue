<template>
  <div class="i-tab-bar-item" @click="itemClick">
    <div v-show="!isActive"><slot name="item-icon"></slot></div>
    <div v-show="isActive"><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      // isActive: false
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    // 控制点击状态切换
    isActive() {
      return this.$route.path == this.path
    },

    // 控制文字颜色样式切换
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style>
  .i-tab-bar-item {
    flex: 1;/* 平分弹性布局的水平空间 */
    text-align: center;
    font-size: 14px;
  }

  .i-tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;/* 解决图片往下偏移偏移3px的问题 */
  }

  .active {
    color: red;
  }

</style>
