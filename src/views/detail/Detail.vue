<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from 'views/detail/childComps/DetailNavBar'

export default {
  name: 'detail',
  data() {
    return {
      id: null
    };
  },
  components: {
    DetailNavBar
  },
  created() {
    this.id = this.$route.params.id
  }
};
</script>