<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Tost',
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,duration){
      this.isShow=true;
      this.message=message;
      setTimeout(()=>{
        this.isShow=false;
        this.message='';
      },duration)
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
     top: 50%;
    left: 50%;
   width: 240px;
   height: 60px;
    transform: translate(-50%,-50%);
    text-align: center;
    line-height: 60px;
    border-radius: 5px;
    color:#fff;
    background-color: rgba(0,0,0,.75);
    z-index: 999;
    font-size: 16px;
  }
</style>