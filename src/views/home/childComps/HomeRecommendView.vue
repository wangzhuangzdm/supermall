<template>
  <div class="recommend">
   <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
   </div>
  </div>
</template>

<script>

export default {
  name:'HomeRecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 20px 0;
  font-size: 14px;
  border-bottom: 5px solid #eee;
}
.recommends-item {
  flex: 1;
}
.recommend img {
  width: 65px;
  height: 65px;
  margin-bottom: 5px;
}
</style>