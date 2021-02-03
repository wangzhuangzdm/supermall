<template>
  <div class="category">
    <!-- 导航 -->
    <category-nav-bar class="category-nav"></category-nav-bar>
     <!--导航-->
    <!-- <tab-control class="category-tab-control" :titles="titles" @itemClick="itemClick(index)"></tab-control> -->
    <!--侧边栏-->
     
     <category-slide :category-name="categoryName"  @slideItemClick="slideItemClick"></category-slide>
    
     <scroll class="scroll-height" ref="scroll">
    <!--主体部分-->
    <category-content :sub-category="subCategory[currentIndex]" @imgLoad="imgLoad"></category-content>
    
    <!--商品展示列表-->
   <!-- <goods-list :goods="categoryDetailList"></goods-list> -->
    </scroll>
  </div>
</template>

<script>
import CategoryNavBar from './childComps/CategoryNavBar';
import CategorySlide from './childComps/CategorySlide'
import CategoryContent from "./childComps/CategoryContent";
// import TabControl from "components/content/tabControl/TabControl";
// import GoodsList from "components/content/goods/GoodsList";
 import Scroll from "components/common/scroll/Scroll";

import {getCategory,getSubcategory,getCategoryDetail} from 'network/category';
export default {
 name:'Category',
 components:{
   CategoryNavBar,
   CategorySlide,
   CategoryContent,
  //  TabControl,
  //  GoodsList,
    Scroll
 },
 data() {
   return {
     categoryName:[],
     titles:['流行','新款','精选'],
     currentIndex:0,
     subCategory:[],
      categoryDetailList: [],
   }
 },
 created() {
   //获取分类左侧数据
    this.getCategory();
    this.getSubcategory('3627',0);
    // this.getCategoryDetail();
 },
 methods:{
   //导航点击
  //  itemClick(index){
  //       const titles = ['pop','new','sell']
  //       this.getCategoryDetail(this.categoryName[this.currentIndex].miniWallkey,titles[index])
  //     },
   imgLoad(){
        this.$refs.scroll.refresh()
      },
    slideItemClick({maitKey,index}){
        this.currentIndex = index;
        this.getSubcategory(maitKey,this.currentIndex);
      //  this.getCategoryDetail(this.categoryName[this.currentIndex].miniWallkey,'pop')
      },
   //网络请求
   getCategory() {
     getCategory().then(res=>{
      // console.log(res);
       this.categoryName = res.data.category.list
       console.log(this.categoryName);
    })
   },
  //发送网络请求获取右侧数据
      getSubcategory(maitKey,index){
        getSubcategory(maitKey).then(res=>{
          // console.log(this.$refs.content)
          this.subCategory[index] = res.data.list
          // 获取完数据让组件强制刷新了
          this.$forceUpdate();
          // console.log(res);
        })
      },
      //发送网络请求获取详情数据
      // getCategoryDetail(miniWallkey,type){
      //   getCategoryDetail(miniWallkey,type).then(res=>{
      //     this.categoryDetailList = res
      //     // console.log(res);
      //   })
      // },

 }
 
}
</script>

<style scoped>
.category {
  position: relative;
  height: 100vh;
}
.category-nav {
  display: flex;
  font-weight: 700;
  color: #fff;
  background-color: var(--color-tint);
  z-index: 99;
}
.category-tab-control {
  position:absolute;
  left: 100px;
  right: 0;
  z-index: 9;
}
.scroll-height{
      position: absolute;
     left: 100px;
      top: 44px;
      right: 0;
      bottom: 49px;
    }
</style>