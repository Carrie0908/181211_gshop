<template>
  <div id="app">
    <!-- 1.留坑 -->
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script type="text/javascript">
  // 2. 引入底部的组件
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    // 3.映射的标签
    components: {
      FooterGuide
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  #app
    width 100%
    height 100%
    background #f5f5f5

</style>
