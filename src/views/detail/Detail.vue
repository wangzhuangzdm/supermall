<template>
 <div id="detail">
     <!--导航-->
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
   <scroll class="content" ref="scroll">
        <!--轮播图-->
    <detail-swiper :topImages="topImages"></detail-swiper>
      <!--基本信息-->
   <detail-base-Info :goods="goods"></detail-base-Info>
    <!--店铺信息-->
   <detail-shop-info :shop="shop"></detail-shop-info>
   <!-- 穿着效果 -->
   <detail-dress-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-dress-info>
   <!-- 尺码信息 -->
   <detail-item-params :itemParams="itemParams"></detail-item-params>
   </scroll>
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

import {getDetail, GetDeatilBaseData,GetDetailShopInfo,GetItemParams} from 'network/detail.js';
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailDressInfo,
    DetailItemParams
   
  },
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      itemParams:{}
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
    })
  },
  methods:{
    imageLoad() {
      
      this.$refs.scroll.refresh();
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