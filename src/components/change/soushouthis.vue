<template lang="html">
<div class="soushou">
<div class="soushou_kuang">
  <div class="soushou_kuang_1">
    <div class="soushou_kuang_img"></div>
    <input type="search" name="search" value="" placeholder="搜索歌曲、歌手、专辑" v-model="items.type" ref="type" id="search">
    <!-- v-model="items.type" ref="type" 监听事件需求 ref -->
  </div>
</div>
  <div class="soushou_ermeng" v-show="change">
   <p>热门搜索</p>
   <ul>
   <router-link v-for="(item,i) in remengss" :key="i" tag="li" :to="{ name: '', params: {} }" @click.native="TopSearch(item.first)">
     <span>{{item.first}}</span>
   </router-link>
   </ul>

  </div>
  <div class="soushou_Connent" v-show="!change">
    <div class="soushou_Connent_ThisSearch">
      <p class="soushou_Connent_ThisSearch_p">单曲</p>
      <ul>
        <router-link v-for='(item,i) in ThisSearch' tag="li" :key="i" :to="{ name: 'SongDetails', params: {id:item.id} }" @click.native="CThisSearch(item.id)">
          <div class="soushou_Connent_ThisSearch_One">
            <div class="Connent_One_left">
              <span>{{item.name}}</span>
              <div class="Connent_One_left_b">
                {{item.artists[0].name +'-'+item.album.name}}
              </div>
            </div>
            <div class="Connent_One_right">

            </div>
          </div>

          <!-- name 单曲名
          artists[0].name 歌手名字 -
          album.name 专辑来源
          if alias[0] 电影或者电视剧应用
          id
          -->
        </router-link>
      </ul>
    </div>
    <div class="soushou_Connent_Singer">
      <p class="soushou_Connent_Singer_p">歌手</p>
      <ul>
        <router-link v-for="(item,i) in ThisSearchSinger" :key="i" tag="li" :to="{ name: '', params: {} }" @click.native="ThisSinger">
          <div class="soushou_Connent_Singer_Img" :style="{backgroundImage:'url('+ item.img1v1Url+')'}"></div>
          <span class="soushou_Connent_Singer_name">{{item.name}}</span>
          <!-- img1v1Url 头像
          name 歌手名字 -->
        </router-link>
      </ul>
    </div>
    <div class="soushou_Connent_Playlist">
      <p class="soushou_Connent_Playlist_p">歌单</p>
      <ul>
        <router-link v-for="(item,i) in ThisSearchPlaylist" :key="i" tag="li" :to="{ name: 'SongListDetail', params: {id:item.id} }" @click.native="Playlist">
          <div class="soushou_Connent_Singer_Img" :style="{backgroundImage:'url('+item.coverImgUrl+')'}"></div>
          <div class="soushou_Connent_Playlist_Connent">
            <span>{{item.name}}</span>
            <div class="soushou_Connent_Playlist_Connent_O">
              <p>{{item.trackCount+'首'}}</p>
              <p>{{'by '+ item.creator.nickname}}</p>
              <p>{{',播放'+item.playCount+'次'}}</p>
            </div>
          </div>
          <!-- coverImgUrl
          name
          trackCount 多少首
          creator.nickname 歌单人
          playCount 播放次数 -->
        </router-link>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
  name:'soushou',
  data(){
    return{
      //对input里的 数值进行初始化
      items:{
        type:'',
      },
      change:true
    }
  },
  created(){
    this.$store.dispatch('ReMengKaishi');
  },
  computed:{
    ...mapState({
      //热门
      remengss:state=>state.ReMeng,
      //搜索出的列表 单曲
      ThisSearch:state=>state.ThisSearch,
      //搜索出的 歌手
      ThisSearchSinger:state=>state.ThisSearchSinger,
      //搜索出的 歌单
      ThisSearchPlaylist:state=>state.ThisSearchPlaylist,
    }),
  },
  methods:{
    TopSearch(vlue){
      this.change = false;
      this.$refs.type.value = vlue;
      this.items.type = vlue;
      //不知道为什么 要这两个一起用才可以 同时改变页面和获取数据
      //可能是因为 this.$refs.type.value 是依赖于 this.items.type
      //this.items.type 改变后影响到了this.$refs.type.value 从而触发监听于items事件
    },
    CThisSearch(data){
      this.$store.commit('set_ThisSongID','soushou');
    },
    ThisSinger(){
      this.$message("该功能并未开发")
    },
    Playlist(){

    }
  },
  watch:{
    //监听具体触发事件
    items: {
        handler: function() {
          let res = {
              keywords:this.$refs.type.value
          }
          let resT = {
              keywords:this.$refs.type.value,
              type:100
          }
          let resS = {
              keywords:this.$refs.type.value,
              type:1000
          }
          this.$store.dispatch('get_ThisSearch',res)
          this.$store.dispatch('get_ThisSearchSinger',resT)
          this.$store.dispatch('get_ThisSearchPlaylist',resS)
          if(this.$refs.type.value == ""){
            this.change = true
          }else{
            this.change = false;
          }
        },
        deep: true
    },

  }
}
</script>

<style lang="css">
.soushou_Connent_Playlist_Connent_O{
  width: 100%;
  height: 100%;
  float: left;
  padding: 10px 0 0 0;
  line-height: 14px;
}
.soushou_Connent_Playlist_Connent p{
  float: left;
font-size: 12px;
padding-right: 5px;
color: #888;
}
.soushou_Connent_Playlist_Connent span{
      font-size: 14px;
}
.soushou_Connent_Playlist_Connent{
  float: left;
    width: calc(100% - 60px);
    margin-left: 10px;
}
.soushou_Connent_Playlist li{
  float: left;
width: 100%;
padding: 5px 0;
border-bottom: 1px solid rgb(246,246,247);
}
.soushou_Connent_Singer li{
  float: left;
width: 100%;
padding: 5px 0;
border-bottom: 1px solid rgb(246,246,247);
}
.soushou_Connent_Singer_name{
  padding: 15px;
    float: left;
    font-size: 16px;
}
.soushou_Connent_Singer_Img{
  width: 50px;
    height: 50px;
    background-size: 100% 100%;
    border-radius: 5px;
    float: left;
}
.soushou_Connent_Playlist_p{
  font-size: 12px;
    line-height: 12px;
    color: #fff;
    padding: 10px 0;
    background: #2cb7d8;
    text-align: center;
}
.soushou_Connent_Singer_p{
  font-size: 12px;
    line-height: 12px;
    color: #fff;
    padding: 10px 0;
    background: #fd8a11;
    text-align: center;
}
.soushou_Connent_ThisSearch_p{
  font-size: 12px;
    line-height: 12px;
    color: #fff;
    padding: 10px 0;
    background:#f1b62f;
    text-align: center;

}
.soushou_Connent_Playlist{
  float: left;
  width: 100%;
}
.soushou_Connent_Singer{
  float: left;
  width: 100%;
  margin-bottom:5px;
}
.Connent_One_left{
  width:calc(100% - 52px);
  float: left;
}

.Connent_One_left_b{
  font-size: 12px;
color: #888;
padding: 5px 0;
text-indent: -3px;
}
.soushou_Connent_ThisSearch{
  float:left;
  margin: 5px 0;
  width: 100%;
}
.soushou_Connent_ThisSearch_One{
  font-size: 17px;
    border-bottom: 1px solid rgb(246,246,247);
    float: left;
    width: 100%;
    padding: 5px 0;
}
.soushou_Connent_ThisSearch li{
  width: 100%;
float: left;
}
.Connent_One_right{
  background-image: url(/static/img/bofang.49a82fe.png);
  float: left;
  /* background-size: contain; */
  width: 22px;
  height: 22px;
  background-position: -24px 0;
  background-size: 166px 97px;
  /* padding: 0 10px; */
  margin: 13px 10px;
}
.soushou_ermeng li{
  display: inline-block;
height: 32px;
margin-right: 8px;
margin-bottom: 8px;
padding: 0 13px;
font-size: 14px;
line-height: 32px;
color: #333;
border: 1px solid rgb(238,239,241);
    border-radius: 25px;
}
.soushou_ermeng ul{
      margin: 10px 0 7px;
}
.soushou_ermeng{
  padding: 15px 10px 0;
}
.soushou_Connent{
  padding: 15px 10px 0;
}
.soushou_ermeng>p{
  font-size: 12px;
  line-height: 12px;
  color: #666;
}
.soushou_kuang_1 >input{
  width: 100%;
    height: 30px;
    line-height: 18px;
    background: transparent;
    font-size: 14px;
    color: #333;
    -webkit-appearance: none;
    border-radius: 0;
    border: 0;
    outline: none;
}
.soushou_kuang_img{
  position: absolute;
 left: 0;
 top: 9px;
 margin: 0 8px;
 vertical-align: middle;
 width: 13px;
 height: 13px;
 background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxLDIzLjUzNWwtMS40MTQsMS40MTRsLTcuMzE1LTcuMzE0CgkJQzE0LjcwOSwxOS4xMDcsMTIuNDYsMjAsMTAsMjBDNC40NzcsMjAsMCwxNS41MjMsMCwxMEMwLDQuNDc3LDQuNDc3LDAsMTAsMGM1LjUyMywwLDEwLDQuNDc3LDEwLDEwYzAsMi4zNDItMC44MTEsNC40OS0yLjE2LDYuMTk1CgkJTDI1LjE4MSwyMy41MzV6IE0xMCwyYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzQuNDE4LDAsOC0zLjU4Miw4LThTMTQuNDE4LDIsMTAsMnoiLz48L3N2Zz4=);
}
.soushou_kuang{
  padding: 15px 10px;
  border-bottom: 1px solid rgb(245,246,247);
  /* margin-top:40px; */
}
.soushou_kuang_1{
  position: relative;
    width: 100%;
    height: 30px;
    padding: 0 30px;
    box-sizing: border-box;
    background: #ebecec;
    border-radius: 30px;
}
</style>
