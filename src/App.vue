<template>
  <div id="app">
    <music></music>
    <loading v-show="isLoading"></loading>
    <hea-der></hea-der>
    <router-view></router-view>
    <bo-ttoms v-show="isBottom"></bo-ttoms>
  </div>
</template>

<script>
import music from './components/music/music';
import HeaDer from './components/Header_vue/header';
import Loading from './components/Header_vue/loading';
import BoTtoms from './components/change/Bottom'
export default {
  name: 'App',
  components:{
    music,
    HeaDer,
    Loading,
    BoTtoms
  },
  computed:{
    isLoading(){
      return this.$store.state.loading;
    },
    isBottom(){
      return this.$store.state.playSongs.OFBottom;
    }
  }
}
</script>

<style>
html {
  background-color: #fff;
}
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}
body,div,span,a,p,ul,li {
margin: 0;
padding: 0;
}
b, em, h1, h2, h3, h4, h5, h6, strong{
  font-weight:400;
  margin: 0;
  padding: 0;
}
</style>
