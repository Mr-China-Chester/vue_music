<template lang="html">
  <div id="music">
  <audio id="musicPlayer" :src="musicUrl" autoplay @timeupdate='setCurTime' @ended="initMusicStatus" @durationchange="setDuration" @canplay="playMusic"
    ref="player"></audio>
</div>
</template>
<script>
import {
  mapState
} from 'vuex';
export default {
  name:'music',
  data(){
    return{

    }
  },
  computed:{
    ...mapState({
      //url
      musicUrl: state=> state.playSongs.musicUrl,
      //播放状态
      playStatus: state => state.playSongs.playStatus,
      //是否当前音乐
      curMusic: state => state.playSongs.curMusic,
      //歌单
      songListDetails: state => state.songListDetails.tracks,
      //获取歌曲循环方式
      playxh:state=> state.playSongs.playxh,
    }),
  },
  methods:{
    //播放音乐
    playMusic() {
      this.$store.commit('set_Status', true);
    },
    //动态设置歌曲当前时间
    setCurTime() {
      this.$store.commit('set_MusicCurtime', this.$refs.player.currentTime);
    },
    //播放完成时初始化操作 自动下一首
    initMusicStatus() {
      if(this.playxh == '3'){
        // 单曲循环
      }else if(this.playxh == '2' || this.playxh == '1'){
        // 列表循环 和随机循环
        if(this.songListDetails.length > 0){
          let obj = {
            id :this.$route.params.id,
            type :'next',
            change:this.playxh
          }
          this.$store.dispatch('get_SwitchSongs',obj).then((ref)=>{
            if(ref == false){
              this.$message('音乐列表没有音乐了呢');
              this.$refs.player.pause();
              this.$store.commit('set_Status', false);
              this.$store.commit('set_MusicCurtime', 0);
            }else{
              this.$store.dispatch('get_PlaySongDetails',ref);
              this.$router.push({
                name:'SongDetails',
                params:{
                  id:ref
                }
              });
            }
          });
        }else {
            this.$message('音乐列表没有音乐了呢');
            this.$refs.player.pause();
            this.$store.commit('set_Status', false);
            this.$store.commit('set_MusicCurtime', 0);
        }
      }
    },
    //设置歌曲时长
    setDuration() {
      this.$store.commit('set_MusicDuration', this.$refs.player.duration);
    }
  },
}
</script>

<style lang="css">
</style>
