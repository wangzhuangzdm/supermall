<template>
 <div id="detail">
     <!--导航-->
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav"></detail-nav-bar>
   <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
        <!--轮播图-->
    <detail-swiper :topImages="topImages"></detail-swiper>
      <!--基本信息-->
   <detail-base-Info :goods="goods"></detail-base-Info>
    <!--店铺信息-->
   <detail-shop-info :shop="shop"></detail-shop-info>
   <!-- 穿着效果 -->
   <detail-dress-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-dress-info>
   <!-- 尺码信息 -->
   <detail-item-params ref="params" :itemParams="itemParams"></detail-item-params>
   <!-- 评论信息展示 -->
   <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
   <!-- 推荐商品 -->
   <!-- <goods-list :goods="recommend"></goods-list> -->
   <detail-recommend-info ref="recommend" :recommend ="recommend" @imageLoad="imageLoad"></detail-recommend-info>
   </scroll>
   <!-- 底部加入购物车 -->
   <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
   <back-top @click.native="backClick" v-show="isShow" ></back-top>
 </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailDressInfo from './childComps/DetailDressInfo';
import DetailItemParams from './childComps/DetailItemParams';
import DetailCommentInfo from './childComps/DetailCommentInfo';
import DetailBottomBar from './childComps/DetailBottomBar';
import BackTop from 'components/content/backTop/BackTop';

// import GoodsList from 'components/content/goods/GoodsList.vue';
import DetailRecommendInfo from './childComps/DetailRecommendInfo';
import { debounce } from "common/utils.js";
import {getDetail, GetDeatilBaseData,GetDetailShopInfo,GetItemParams,getRecommend} from 'network/detail.js';
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailDressInfo,
    DetailItemParams,
    DetailCommentInfo,
    // GoodsList,
    DetailRecommendInfo,
    DetailBottomBar,
     BackTop
   
  },
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      itemParams:{},
      commentInfo:{},
      recommend:[],
      themeTopYs:[],
      getThemeTopYs:null,
      currentIndex:0,
       isShow: false,
    }
  },
  created(){
    //保存路由传入的iid
    this.iid=this.$route.params.iid

    //根据iid请求详情数据
    getDetail(this.iid).then((res)=>{
      const data = res.result;
      console.log(res);
      //获取轮播图数据
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new GetDeatilBaseData(data.itemInfo,data.columns,data.shopInfo);
      //获取商家信息
      this.shop = new GetDetailShopInfo(data.shopInfo);
      //获取穿着效果信息
      this.detailInfo = data.detailInfo
      //获取尺码信息
      this.itemParams = new GetItemParams(data.itemParams)
      //获取评论信息
      this.commentInfo = data.rate.list ? data.rate.list[0] : {}


      //渲染完成后获得各个信息的offstTop值
      // this.$nextTick(()=>{
      //   this.themeTopYs =[]
      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.themeTopYs);
      // })
      this.getThemeTopYs = debounce(()=>{
         this.themeTopYs =[]
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themeTopYs);
      },300)
    });
    getRecommend().then((res)=>{
      this.recommend = res.data.list
      console.log(this.recommend);
    })
  },
  methods:{
       //回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    imageLoad() {
      this.$refs.scroll.refresh();
      // 渲染完成后获得各个信息的offstTop值
      this.getThemeTopYs();
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200);
    },
    contentScroll(position) {
      const positionY = -position.y
      // console.log(position);
      
      let length = this.themeTopYs.length;
      for(let i =0;i<length;i++) {
       
        if(this.currentIndex !== i && ((i<length-1 && positionY>=this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i===length-1 && positionY>=this.themeTopYs[i]))) {
          this.currentIndex = i;
          console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
        this.isShow = -position.y > 1000;
    },
    addToCart() {
      const product = {};
      product.iid = this.iid;
      product.imgURL = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.newPrice = this.goods.lowNowPrice;
     this.$store.dispatch('addCart',product).then(res=>{
       this.$toast.show(res,2000);
       console.log(this.$toast);
     })
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  background-color: #fff;
  z-index: 2;
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  background-color: #fff;
}
.detail-nav-bar {
  position: relative;
   z-index: 3;
}
</style>