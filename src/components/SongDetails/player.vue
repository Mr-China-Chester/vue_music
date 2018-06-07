<template lang="html">
  <div class="player">
    <div class="progress-box">
      <div class="schedule" @touchmove="changeProgress" ref="schedule" @touchstart="changeProgress"></div>
      <i class="progress-bar" :style={width:progressWidth}>
        <s class="progress-dot"></s>
      </i>
      <span class="curTime">{{formatTime(musicCurtime)}}</span>
      <span class="duration">{{formatTime(musicDuration)}}</span>
    </div>
    <div class="player_bottom">
      <div @click="CycleSong" :class="{'player_bottom_xunhuan':playxh ==1,'player_bottom_xunhuan2':playxh==2,'player_bottom_xunhuan3':playxh ==3}"></div>
      <div class="player_bottom_shangyishou" @click="ONa"></div>
      <div @click="change" :class="{'player_bottom_bofang':playStatus==false,'player_bottom_zhangting':playStatus==true}"></div>
      <div class="player_bottom_xiayishou" @click="NextSong"></div>
      <div class="player_bottom_liebiao" @click="TheListOf"></div>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex';
export default {
  name:'player',
  data(){
    return{
    }
  },
  computed:{
    ...mapState({
        //播放状态
        playStatus: state => state.playSongs.playStatus,
        //歌曲当前时间
        musicCurtime: state => state.playSongs.musicCurtime,
        //总时间
        musicDuration: state => state.playSongs.musicDuration,
        //歌曲列表
        songListDetails: state => state.songListDetails.tracks,
        //获取歌曲循环方式
        playxh:state=> state.playSongs.playxh,
        //播放器列表是否打开
        //ThisListOpen:state=> state.playSongs.ThisListOpen,
    }),
    //进度条长度
    progressWidth(){
      let per = (this.musicCurtime / this.musicDuration).toFixed(3);
      return per * 100 + '%';
    }
  },
  methods:{
    formatTime(time){
      let min = parseInt(time / 60);
      let second = parseInt(time % 60);
      min < 10 ? min = "0" + min : min;
      second < 10 ? second = "0" + second : second;
      return "" + min + ":" + second + "";
    },
    //改变歌曲进度
    changeProgress(event) {
      let ev = event || window.event;
      // ev.preventDefault();
      let num = event.touches[0].clientX - event.target.parentNode.offsetLeft;
      let max = event.target.parentNode.offsetWidth;
      num > max ? num = max : num;
      num < 0 ? num = 0 : num;
      num = num / max * this.musicDuration.toFixed(3);
      document.getElementById('musicPlayer').currentTime = num;
    },
    //上一首
    ONa(){
      if(this.songListDetails.length > 0){
        let obj = {
          id:this.$route.params.id,
          type: 'prev',
          change:this.playxh,
        }
        this.$store.dispatch('get_SwitchSongs', obj).then((res) =>{
          this.$store.dispatch('get_PlaySongDetails',res);
          this.$router.push({
            name: 'SongDetails',
            params: {
              id: res
            }
          })
        });
      }
    },
    //下一首
    NextSong(){
      if(this.songListDetails.length > 0){
        let obj = {
          id:this.$route.params.id,
          type: 'next',
          change:this.playxh,
        }
        this.$store.dispatch('get_SwitchSongs',obj).then((res)=>{ //利用vuex的便利 直接获取 并回调id
          this.$store.dispatch('get_PlaySongDetails',res); //把获取到的id传进 get_PlaySongDetails里面
          this.$router.push({
            name:'SongDetails',
            params: {
              id: res
            }
          })
        })
      }
    },
    change(){
      //暂停音乐
      //暂停音乐 获取当前audio标签的id musicPlayer 查看paused属性
      let changeBF = document.querySelector('audio#musicPlayer').paused;
      if(changeBF == false){
        document.querySelector('audio#musicPlayer').pause();//暂停
      }else{
        document.querySelector('audio#musicPlayer').play();//播放
      }
      this.$store.commit('set_Status',!this.playStatus)
    },
    TheListOf(){
      this.$emit("listToChildren",true);
      //this.$store.commit('set_ThisListOpen',!this.ThisListOpen)
    },
    CycleSong(){
      let CPlayxh;
      if(this.playxh == 1){
        this.$message({
          message: '随机循环',
          center: true
        });
        CPlayxh = 2;
      }else if(this.playxh == 2){
        this.$message({
          message: '单曲循环',
          center: true
        });
        CPlayxh = 3;
      }else{
        this.$message({
          message: '列表循环',
          center: true
        });
        CPlayxh = 1;
      }
      this.$store.commit('set_Playxh',CPlayxh)
    },
  }
}
</script>

<style lang="css">
.player_bottom_xunhuan3{
  background-image: url(../../assets/danqu.png);
  margin: 0 10%;
}
.player_bottom_xunhuan2{
  background-image: url(../../assets/suijixunhuan.png);
  margin: 0 10%;
}
.player_bottom >div{
  background-size: 100% 100%;
    width: 35px;
    height: 35px;
    float: left;
    margin-top: 20px;
}
.player_bottom{
  position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0;
}
.player_bottom_liebiao{
  background-image: url(../../assets/liebiao.png);
  margin: 0 10%;
}
.player_bottom_xiayishou{
  background-image: url(../../assets/shangxia.png);
  transform: rotate(180deg);
}
.player_bottom_bofang{
background-image: url(../../assets/bofang2.png);
margin: 0 6%;
}
.player_bottom_zhangting{
  background-image: url(../../assets/zhangting.png);
  margin: 0 6%;
}
.player_bottom_shangyishou{
background-image: url(../../assets/shangxia.png);
}
.player_bottom_xunhuan{
background-image: url(../../assets/liebiaoxunhuan.png);
margin: 0 10%;
}
.player{
  width: 100%;
    font-size: 12px;
    color: #fff;
}
.SongDetails_back_One_playcontext{
  width: 100%;
  margin:20px 0;
}
.progress-box{
  position: relative;
  margin: 0 auto;
  background: radial-gradient(#dedede -180%, transparent 100%);
  width: 70%;
  height: 0.1rem;
  border-radius: .2rem;

}
.schedule{
  width: 100%;
  height: 400%;
  position: absolute;
  top: -200%;
  left: 0;
  z-index: 8888;
}
.progress-bar{
 height: 100%;
  position: absolute;
  background:red;
}
.curTime{
  position: absolute;
  top: -.3rem;
  left: -2rem;
}
.duration{
  position: absolute;
top: -.3rem;
right: -2rem;
}
</style>
