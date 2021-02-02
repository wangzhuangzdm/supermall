<template>
  <div>
     <div class="recommend-info">热门推荐</div>
    <goods-list class="recommend-info">
      
      <goods-list-item v-for="(item,indez) in recommend" :key="indez" :goodsItem="item"></goods-list-item>
    </goods-list>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList.vue';
import GoodsListItem from 'components/content/goods/GoodsLIstItem.vue';

export default {
  name: "DetailRecommendInfo",
  components:{
    GoodsList,
    GoodsListItem
  },
   props: {
		  recommend: {
        type: Array,
        default(){
          return []
        }
      }
    },
  //  data(){
  //   return {
  //     counter:0,
  //     imageLength:0,
  //   }
  // },
  // methods:{
  //   imgLoad() {
  //     if(++this.counter === this.imageLength) {
        
  //       this.$emit('imageLoad')
  //     }
  //   }
  // },
  // watch:{
  //   detailInfo() {
  //     this.imageLength = this.detailInfo.detailImage[0].list.length
  //   }
  // }

}
</script>

<style scoped>
.recommend-info {
 
    padding: 10px;
    text-align: center;
  }

  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
</style>