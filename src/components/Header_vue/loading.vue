<template lang="html">
<div class="loading">
<img src="../../assets/loading.gif" alt="" class="loading_img">
</div>
</template>

<script>
export default {
  name:'loading'
}
</script>

<style lang="css">
.loading_img{
  padding: 360px 170px;
}
.loading{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background: #fff;
}
</style>
