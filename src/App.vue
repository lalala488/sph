<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <!--    <Footer v-show="$route.path == '/home' || $route.path == '/search'"/>-->
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: '',
  data () {
    return {
      isShow: true
    }
  },
  components: {
    Header,
    Footer
  }

}

</script>
<style>
</style>
