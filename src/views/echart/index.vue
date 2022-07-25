<template>
  <div class="dashboard-container">
    <!--  中国地图  -->
    <china-map/>
  </div>
</template>

<script>
import ChinaMap from './china-map'
export default {
  components: {ChinaMap},
}
</script>

<style lang="scss" scoped>

.dashboard-container{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
