import BackTop from "components/content/backTop/BackTop"
import { BACKTOP_DISTANCE } from "@/common/const"

export const backTopMixin = {
  data() {
    return {
      showBackTop: false,  // 是否滚动到顶部
    }
  },
  components: {
    BackTop
  },
  methods: {
    // 滚动到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    showBackTopBtn(position) {
      this.showBackTop = (-position.y) > BACKTOP_DISTANCE  // 显示或隐藏滚动到顶部的按钮
    }
  }
}