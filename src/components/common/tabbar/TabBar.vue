<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar",
  components: {
   
  },
};
</script>

<style scoped>
#tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;

  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}

</style>