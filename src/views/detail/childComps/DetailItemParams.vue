<template>
  <div class="item-params" v-if="Object.keys(itemParams).length !== 0">
   <p>参数信息</p>
   <table v-for="(table,index) in itemParams.rule" class="info-size" :key="index">
     <tr v-for="(tr,indey) in table" :key="indey">
       <td v-for="(td,indexz) in tr" :key="indexz">{{td}}</td>
     </tr>
   </table>
   <table class="info-param">
     <tr v-for="(info,index) in itemParams.info" :key="index">
       <td class="info-param-key">{{info.key}}</td>
       <td class="param-value">{{info.value}}</td>
     </tr>
   </table>
    <div class="info-img" v-if="itemParams.image !== ''">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailItemParams",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
  .item-params {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
   .item-params p {
     font-size: 16px;
     font-weight: 600;
     color: red;
   }
  .item-params table {
    width: 100%;
    border-collapse: collapse;
  }
   .item-params table tr {
    height: 42px;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
   .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
  .param-value {
    color: #eb4868
  }
   .info-img img {
    width: 100%;
  }
</style>