<template lang="html">
<div class="bottom" v-show="show">
  <div class="bottom_this" @click="GoBack">

  </div>
</div>
</template>

<script>
export default {
  name:"bottom",
  data(){
    return{}
  },
  computed:{
    MusicID(){
      return this.$store.state.playSongs.ThisMusicID;
    },
    show(){
      return this.$store.state.playSongs.OFBottom;
    }
  },
  methods:{
    GoBack(){
      if(this.$router.currentRoute.name == 'gexin'){
        this.$store.commit('set_ThisSongID',false)
      }else{
        this.$store.commit('set_ThisSongID',this.$router.currentRoute.name)
      }
      this.$router.push({
        name:'SongDetails',
        params:{
          id:this.MusicID,
        }
      })
    },
  }
}
</script>

<style lang="css">
.bottom{
  width: 40px;
      height: 40px;
      bottom: 20px;
      position: fixed;
      left: calc(100% - (50% + 20px));
}
.bottom_this{
background-image: url(../../assets/yinyue.png);
background-size: 100% 100%;
width: 100%;
height: 100%;
animation: myMove1 5s ease-in infinite alternate;
-webkit-animation: myMove1 5s ease-in infinite alternate;
}


@keyframes myMove1 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}

@-webkit-keyframes myMove1 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}
</style>
