<template>
  <div class="shop-info">
    <div class="shop-name">
      <img :src="shop.shopLogo" alt="" />
      <span>{{ shop.name }}</span>
    </div>

    <div class="shop-content">
      <div class="shop-sg">
        <div>
          <p>{{ shop.cSells | getMillion }}</p>
          <span>总销量</span>
        </div>
        <div class="cGoods">
          <p>{{ shop.cGoods }}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="score">
        <table>
          <tr v-for="item in shop.score" class="score-item">
            <td>{{ item.name }}</td>
            <td :style="{ color: item.isBetter ? 'red' : 'green' }">
              {{ item.score }}
            </td>
            <td
              :style="{ background: item.isBetter ? '#f13e3a' : '#5ea732' }"
              class="isBetter"
            >
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="inShop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    getMillion(num) {
      return (num / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
.shop-info {
  border-top: 5px solid #f2f5f8;
  border-bottom: 5px solid #f2f5f8;
  padding: 20px 10px;
}
.shop-name {
  display: flex;
}
.shop-name img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.shop-name span {
  font-size: 17px;
  color: #666;
  margin: 15px 0 0 10px;
}
.shop-content {
  display: flex;
  align-items: center;
  padding: 20px;
}
.shop-content .shop-sg {
  display: flex;
  color: #333;
  text-align: center;
}
.shop-content .shop-sg p {
  font-size: 20px;
}
.shop-content .shop-sg span {
  font-size: 12px;
}
.shop-content .cGoods {
  margin: 0 26px;
  padding-right: 30px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.score {
  font-size: 13px;
  color: #333;
}
.score table {
  width: 160px;
}
.score-item td {
  padding: 3px;
  
  font-size: 12px;
}
.score-item .isBetter {
  color: white;
}
.inShop {
  text-align: center;
}
.inShop span {
  padding: 10px 50px;
  background-color: #f2f5f8;
  border-radius: 10px;
  font-size: 14px;
  color: #333;
}
</style>