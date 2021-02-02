<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  naem: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    //创建滚动对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
    });
    //监听滚动位置并发射事件给父组件
    if(this.probeType == 2 || this.probeType == 3) {
        this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    }
    //监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
     this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
      //  console.log(this);
    },
    //获取Y值
      getPositionY(){
        console.log(this.scroll)
        return this.scroll ? this.scroll.y : 0
      }
  },
};
</script>

<style scoped>
</style>