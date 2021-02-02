<template>
  <div id="home">
    <!-- 头部导航 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-control
        :titles="titles"
        @tabClick="tabClick"
        ref="tabControl1"
        class="tab-control"
        v-show="isTabFixed"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <!-- 推荐商品 -->
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <!-- 本周流行 -->
      <feature-view></feature-view>
      <tab-control
        :titles="titles"
        @tabClick="tabClick"
        ref="tabControl"
        
      ></tab-control>
      <!-- 数据展示 -->
      <goods-list>
       <goods-list-item v-for="(item,index) in goods[currentType].list" :key="index" :goodsItem="item"></goods-list-item>
     </goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import GoodsListItem from 'components/content/goods/GoodsLIstItem.vue';
import BackTop from "components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import Scroll from "components/common/scroll/Scroll.vue";
import { debounce } from "common/utils.js";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    GoodsListItem
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      tabOffsetTop: 0,
     isTabFixed:false,
     saveY:0,
    };
  },
  created() {
    //请求轮播图等数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 300);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    activated() {
      // 回到路由时滚到之前记录的位置
      this.$refs.scroll.scrollTo(0,this.saveY,0);
      this.$refs.scroll.refresh();
    },
    //离开路由前记录滚到的位置
    deactivated() {
      this.saveY = this.$refs.scroll.getPositionY();
      
      
    }
  },
  methods: {
   
    // 事件监听

    //判断切换的type
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl.currentIndex = index;
       this.$refs.tabControl1.currentIndex = index;
    },
    //回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    //回到顶部按钮的显示与隐藏,tabControl是否吸顶
    contentScroll(position) {
      this.isShow = -position.y > 1000;
      this.isTabFixed = ( -position.y)> this.tabOffsetTop
    },
    //上拉加更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
     //获取tabControl的offsetTop做吸顶效果
    swiperImageLoad() {
     this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
#nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  z-index: 1;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  background-color: #fff;
}
.tab-control {
  position: relative;
  z-index: 2;
}
</style>