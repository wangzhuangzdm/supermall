<template>
  <div id="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#nav-bar {
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
}
.left {
  width: 80px;
}
.right {
  width: 80px;
}
.center{
  flex: 1;
  text-align: center;
  font-size: 18px;
  line-height: 44px;
  font-weight: 400;
  
}
</style>