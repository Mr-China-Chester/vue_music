<template lang="html">
  <div class="SongDetails">
    <div class="SongDetails_top">
      <div class="SongDetails_top_first" @click="ReturnGo"></div>
    </div>
    <div class="SongDetails_back_img" :style="{backgroundImage:'url('+songDetails.songs[0].al.picUrl+')'}">
    </div>
    <div class="SongDetails_back_One">
      <div class="SongDetails_back_One_1">
        <div class="SongDetails_back_One_2">
          <div class="SongDetails_back_One_3">

          </div>
          <div class="SongDetails_back_One_4">
            <div class="SongDetails_back_One_5" :style="{backgroundImage:'url('+songDetails.songs[0].al.picUrl+')'}">

            </div>
          </div>
          <div class="SongDetails_back_One_6">

          </div>
          <div class="SongDetails_back_One_7">

          </div>
        </div>
      </div>
      <div class="SongDetails_back_Singer">
        <h2 class="SongDetails_back_Singer_h2">
          <span class="SongDetails_back_Singer_name">{{songDetails.songs[0].name + '-'}}</span>
          <span class="SongDetails_back_Singer_gap">{{songDetails.songs[0].ar[0].name}}</span>
        </h2>
        <div class="SongDetails_back_Singer_Connent">
          <ul :style="{marginTop:format.compLyricPos(musicCurtime,Lyric)}" class="SongDetails_back_Singer_Connent_o">
              <li v-for="(item,i) in Lyric" :key="i" :class="{highBright:format.formatLyrichighBright(musicCurtime,Lyric,i)}">{{item[1]}}</li>
         </ul>
        </div>
      </div>
      <div class="SongDetails_back_One_playcontext">
        <player v-on:listToChildren="showchangechildren"></player>
      </div>
    </div>
    <el-dialog title="歌曲列表" :visible.sync="ThisListOpen">
      <ul class="SongDetails_Bottom">
        <div class="SongDetails_Bottom_not" v-if="songListDetails.length== 0">
          没有音乐呢
        </div>
        <router-link v-for="(item,i) in songListDetails":key=i tag="li":to="{ name: '', params: {} }">
          <div class="SongDetails_Bottom_music">
            {{item.name}}
          </div>
          <!-- 这里为什么要写两个呢 因为songListDetails这个值里面的参数不同传进来 用来判断是否有这个值 -->
          <p class="SongDetails_Bottom_name" v-if="item.artists">{{'-  '+item.artists[0].name}}</p>
          <p class="SongDetails_Bottom_name" v-if="item.ar">{{'-  '+ item.ar[0].name}}</p>
        </router-link>
      </ul>
    </el-dialog>
  </div>
</template>
<script>
import player from './player';
//引用vuex 的map
import {
  mapState
} from 'vuex';
export default {
  name:'SongDetails',
  data(){
    return{
      ThisListOpen:false,
      gridData:[],
    }
  },
  components:{
    player
  },
  created(){
    //获取所有关于这个音乐的详细信息 执行$store
    this.$store.dispatch('get_PlaySongDetails', this.$route.params.id);
  },
  computed:{
    ...mapState({
      //播放状态
        playStatus: state => state.playSongs.playStatus,
        //歌曲当前时间
        musicCurtime: state => state.playSongs.musicCurtime,
        //歌曲详情
        songDetails:state=>state.playSongs.songDetails,
        //获取歌单
        songListDetails:state=>state.songListDetails.tracks,
    }),
    Lyric() {
        return this.format.formatLyric(this.$store.state.playSongs.Lyric);
    },
    ThisSongid(){
      return this.$store.state.ThisSongID;
    },
    musicUrl(){
      return this.$store.state.playSongs.musicUrl;
    },
  },
  methods:{
    showchangechildren(data){
      this.ThisListOpen = data
    },
    ReturnGo(){
      //返回的时候打开底部的音乐按钮
      this.$store.commit('set_OFBottom',true);
      let PDSss = this.ThisSongid
      if(PDSss == false){
        this.$router.push({
          name:'gexin'
        })
      }else if(PDSss == 1 ||PDSss == 2||PDSss == 3||PDSss == 4||PDSss == 5||PDSss == 6){
        this.$router.push({
          name:'RankingList',
          params:{
            id:PDSss,
          }
        })
      }else if(PDSss == 'soushou' || PDSss == 'gedang'){
        this.$router.push({
          name:PDSss
        })
      }else{
        //
        this.$router.push({
          name:'SongListDetail',
          params:{
            id:PDSss,
          }
        })
      }
    },
  },
  watch:{
    //监听 musicUrl 因为有些歌曲musicUrl为null
    musicUrl(){
      if(this.musicUrl == 'Null' || this.musicUrl == 'Nulls'){
        this.$message.error('此音乐是付费歌曲呢，不能给你听哦');
        this.$router.go(-1);
      }
    }
  },
}
</script>
<style lang="css">
.SongDetails_Bottom_not{
  text-align: center;
    padding: 20px 0;
}
.SongDetails_Bottom_name{
  float: left;
    font-size: 11px;
    color: rgb(143,143,143);
        margin-left: 5px;
}
.SongDetails_Bottom_music{
  float: left;
}
.SongDetails_Bottom{
  width: 100%;
height: 220px;
overflow: auto;
}
.el-dialog__body{
    padding: 0 20px;
}
.SongDetails_Bottom li{
  display: inline-block;
      width: 100%;
      padding: 5px 0;
      border-bottom: 1px solid rgb(242,242,242);
}
.el-dialog{
  width: 100%;
    position: absolute;
    bottom: 0;
    margin: 0;
}
.el-dialog__title{
  font-size: 14px;
}
@keyframes myMove1 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}

@-webkit-keyframes myMove1 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}
.SongDetails_top{
  font-size: 16px;
  line-height: 50px;
  z-index: 11;
  position: absolute;
}
.SongDetails_top_first{
  background-image: url("../../assets/zuo_1.png");
  width: 30px;
  height: 30px;
  background-size: 100%;
  float: left;
  margin: 10px;
}
.highBright{
  color:#fff;
}
.SongDetails_back_Singer_Connent{
  height: 250px;
overflow: hidden;
margin-top: 14px;
}
.SongDetails_back_Singer_Connent li{
  display: inline-block;
      text-align: center;
      width: 100%;
      font-size: 16px;
      /* color: hsla(0,0%,100%,.6); */
      padding: 10px 0;
      height: 20px;
}
.SongDetails_back_Singer_Connent_o{
  color: hsla(0,0%,100%,.6);
}
.SongDetails_back_Singer_Connent_o>:first-child{
  padding: 20px 0;
}
.SongDetails_back_Singer_Connent ul{

  transition: all 0.6s linear;
}
.SongDetails_back_Singer_gap{
  color: hsla(0,0%,100%,.6);
  font-size: 16px;
}
.SongDetails_back_Singer_name{
  font-size: 18px;
}
.SongDetails_back_Singer_h2{
  font-size: 18px;
  text-align: center;
line-height: 1.1;
color: #fefefe;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}
.SongDetails_back_Singer{
  margin-top: 25px;
  padding: 0 35px;
}
.SongDetails_back_One_7{
  width: 96px;
  height: 137px;
  top: -70px;
  left: 133px;
  background-image: url(//s3.music.126.net/m/s/img/needle-ip6.png?be4ebbe…);
  position: absolute;
  background-size: contain;
  z-index: 2;
}
.SongDetails_back_One_6{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  background: url(//s3.music.126.net/m/s/img/disc_light.png?2bb24f3…) no-repeat;
    background-size: contain;
}
.SongDetails_back_One_5{
  width: 100%;
  vertical-align: middle;
  /* z-index: 11111111111111111; */
  height: 100%;
  background-size: 100%;
}
.SongDetails_back_One_4{
  /* transform: matrix(0.0836367, 0.996496, -0.996496, 0.0836367, 0, 0) matrix(0.977044, 0.213036, -0.213036, 0.977044, 0, 0); */
  width: 184px;
  height: 184px;
  margin: -92px 0 0 -92px;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
}
.SongDetails_back_One_3{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  background: url(//s3.music.126.net/m/s/img/disc.png?d3bdd10…) no-repeat;
  background-size: contain;
}
.SongDetails_back_One_2{
  width: 296px;
  height: 296px;
  position: relative;
  margin: 0 auto;
}
.SongDetails_back_One_1{
  padding-top: 70px;
}
.SongDetails_back_One{
  width: 100%;
  position: absolute;
  height: 100%;
  z-index: 10;
}
.SongDetails_back_img::after{
  content: ' ';
      position: absolute;
      background-color: rgba(0,0,0,.5);
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
}
.SongDetails_back_img{
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transform-origin: center top;
  transform-origin: center top;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  -webkit-transition: opacity .3s linear;
  transition: opacity .3s linear;
  filter: blur(40px);
}
</style>
