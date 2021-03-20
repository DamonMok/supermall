<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(message="default message", delay=2000) {

      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, delay)
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  border-radius: 10px;

  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>