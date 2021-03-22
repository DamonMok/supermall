<template>
  <nav-bar>
    <template #left>
      <img class="back" src="~assets/img/common/back.svg" alt="" @click="didClickedBack">
    </template>
    <template #center>
      <div class="title">
        <div class="title-item" v-for="(item, index) in title" :key=index :class="{active: currentIndex===index}" @click="didClickedNavBar(index)">{{ item }}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      title:['商品', '参数', '评论', '推荐'],
      currentIndex:0
    }
  },
  methods: {
    didClickedNavBar(index) {
      this.currentIndex = index
      this.$emit("didClickedNavBar", index)
    },

    didClickedBack() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.back {
  width: 22px;
  height: 22px;
}

</style>