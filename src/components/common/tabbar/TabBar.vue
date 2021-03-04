<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>

export default {

}
</script>

<style>
  #tab-bar {
    display: flex;/* 水平弹性布局 */
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    height: 49px;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);/* 阴影 */
  }
</style>
