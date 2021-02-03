<template>
  <div class="content"v-if="Object.keys(subCategory).length !== 0">
    <div v-for="(item,index) in subCategory" class="content-item" :key="index" >
      <img :src="item.image" alt="" @load="imgLoad(index)">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>

export default {
 name: "CategoryContent",
  props:{
      subCategory:{
        type:Array,
        default(){
          return []
        }
      },
      currentIndex:0
    },
       methods:{
      imgLoad(index){
        const length = this.subCategory.length
        // const count = 1
        // if(count === length){
        //   console.log('oooo')
        // }
        if(index === length-1){
          this.$emit('imgLoad')
        }
      }
    }
}
</script>

<style scoped>
 .content {
   flex-wrap: wrap;
   display: flex;
   }
   .content-item{
     width: 25%;
     margin: 10px;
     text-align: center;
   }
   .content-item img {
      width: 100%;
   }
   .content-item p {
      margin-top: 5px;
       font-size: 14px;
   }
</style>