<template lang="html">
<div class="gexin">
<div class="">
  <h1 class="list-item">
    <div></div>
    <a>推荐歌单</a>
  </h1>
  <ul class="gexin_ul">
    <router-link v-for="(item,i) in PrSongList" v-if='i<=5' :key="i" tag="li" :to="{ name: 'SongListDetail', params: {id:item.id} }"><!--v-if限制次数-->
      <p class="gexin_p">{{format.formatPlayCount(item.playCount)}}</p><!--引用公用js format 中的formatPlayCount函数-->
      <img v-lazy="item.picUrl" class="all_img">
      <p class="gexin_p2">{{item.name}}</p>
    </router-link>
  </ul>
  <h1 class="list-item" style="margin-top:0;">
    <div></div>
    <a>最新音乐</a>
  </h1>
  <ul class="gexin_newsong">
    <router-link v-for="(item,i) in newsong" v-if='i<10' :key="i" tag="li" :to="{ name: 'SongDetails', params: {id:item.id} }" @click.native="ThisSongID">
      <div class="gexin_newsong_div">
        <div class="gexin_newsong_div_left">
          <div class="gexin_newsong_div_left_top">
            {{item.name}}
            <span>{{item.song.alias[0] || ""}}</span>
          </div>
          <div class="gexin_newsong_div_left_bottom">
            <p>{{ item.song.artists[0].name  + item.song.album.name}}</p>
          </div>
        </div>
        <div class="gexin_newsong_div_right">
          <div class="gexin_bofang">

          </div>
        </div>
      </div>
    </router-link>
  </ul>
  <div class="gexin_happy">
    <div class="logo"><svg class="logosvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 88"><path fill-rule="evenodd" fill="#e60012" d="M0,17.171C0,7.688,7.819,0,17.466,0h54.583 c9.646,0,17.466,7.688,17.466,17.171v53.658c0,4.742-1.705,8.789-5.116,12.142c-3.411,3.354-7.527,5.03-12.351,5.03H17.466 C7.819,88.001,0,80.313,0,70.829V17.171z"></path><path fill="#fff" d="m63.6 29c-2.874-1.817-6.396-2.814-10.02-2.993l-.808-2.892.024.027c-.031-.086-.059-.17-.086-.252l-.239-.855c-.552-2.473.454-3.653.969-4.078.088-.064.179-.129.277-.192 2.364-1.535 5.731.924 5.92 1.068 1.494 1.403 4.229 1.75 5.704.314 1.491-1.451 1.136-4.165-.354-5.617-2.32-2.258-9.443-5.885-15.504-1.951-5.45 3.537-5.558 8.515-4.662 11.392l1.086 3.893c-1.819.51-3.564 1.241-5.159 2.191-5.967 3.559-8.96 9.565-8.212 16.479.767 7.097 6.216 12.247 12.957 12.247 7.157 0 12.978-5.668 12.978-12.636-.097-1.664-.077-1.644-.307-3.131-.224-1.451-2.422-8.271-2.422-8.271 1.35.304 2.613.801 3.702 1.489 12.307 7.788 7.186 20.18 6.955 20.726-3.389 7.919-10.78 12.646-20.277 12.973-6.188.214-12.12-2.041-16.697-6.346-4.829-4.537-7.598-10.895-7.598-17.44 0-9.859 6.369-18.812 15.847-22.274 1.973-.722 3.567-2.776 2.476-5.162-.859-1.875-3.185-2.52-5.158-1.798-12.44 4.546-20.798 16.294-20.798 29.23 0 8.552 3.619 16.857 9.929 22.788 5.819 5.469 13.307 8.445 21.19 8.444.358 0 .719-.006 1.078-.018 12.422-.427 22.536-6.984 27.04-17.509 2.812-6.392 4.38-20.857-9.827-29.85m-12.768 16.15c0 2.868-2.397 5.202-5.344 5.202-3.271 0-5.073-2.898-5.365-5.592-.555-5.135 2.2-7.926 4.609-9.363.977-.582 2.051-1.038 3.172-1.369 0 0 2.598 8.05 2.801 9.297.223 1.379.127 1.825.127 1.825"></path><g fill="#101010"><path d="m142.75 65.867c0 0-.516-4.094 0-4.726 11.981-14.67 11.718-34.407 11.718-34.407h7.344c-.126.678-3.794 25.512-19.06 39.13"></path><path d="m162.48 65.867c0 0 .516-4.094 0-4.726-11.981-14.67-12.603-34.407-12.603-34.407h-7.345c.126.678 4.681 25.512 19.948 39.13"></path><path d="m120.71 65.867c0 0-.515-4.094 0-4.726 11.981-14.67 12.644-34.407 12.644-34.407h7.345c-.126.678-4.721 25.512-19.989 39.13"></path><path d="m140.44 65.867c0 0 .516-4.094 0-4.726-11.98-14.67-11.677-34.407-11.677-34.407h-7.345c.126.678 3.755 25.512 19.02 39.13"></path><path d="m163.65 15.904h-45.905c-5.649-.067-7.345-.93-7.345-2.708 0 1.133 0 55.958 0 61.37h8.263v-54.15h41.31c2.741 0 4.591.871 4.591 3.61v43.32c0 2.523-1.514 3.124-8.996 3.947-.636.07-1.104 3.272-1.104 3.272h9.181c5.537 0 9.182-2.029 9.182-8.122v-42.42c0-6.093-3.645-8.123-9.182-8.123"></path><path d="m259.13 21.319h58.759c-.166-2.751-.963-4.513-3.673-4.513h-58.759c.167 2.752.963 4.513 3.673 4.513"></path><path d="m316.06 35.761h-62.43c.166 2.751.964 4.513 3.672 4.513h62.43c-.167-2.752-.963-4.513-3.672-4.513"></path><path fill-rule="evenodd" d="m378.49 61.03h-37.642v-4.512h37.642v4.512"></path><path d="m363.8 20.426v-6.318h-8.255v6.318h8.255"></path><path d="m387.67 18.612h-59.678c.167 2.751.964 4.513 3.673 4.513h59.677c-.166-2.752-.963-4.513-3.672-4.513"></path><path d="m389.51 35.761h-63.35c.166 2.751.963 4.513 3.673 4.513h63.35c-.166-2.752-.963-4.513-3.673-4.513"></path><path d="m317.72 64.11c-1.168-4.204-3.503-12.11-3.503-12.11h-8.263c0 0 2.677 9.02 3.742 12.521.523 1.718.286 2.467.16 3.387-.326 2.373-1.394 2.144-3.902 2.144h-35.806c-4.287 0-4.971-3.768-4.361-5.528 2.349-6.791 8.263-24.368 8.263-24.368h-8.263c0 0-5.711 17.13-8.01 23.951-.566 1.68-.422 3.659-.25 4.479.924 4.414 4.279 5.979 8.951 5.979h43.15c4.672 0 7.272-1.567 8.196-5.981.173-.821.523-2.234-.101-4.479"></path><path d="m376.65 42.98h-38.561c-3.396.032-5.509-.172-5.509-.902 0 0 0 21.352 0 26.18 0 6.094 2.727 6.317 8.264 6.317h45.904v-24.368c.0001-6.095-4.561-7.222-10.1-7.222m1.836 8.124v18.954h-33.97c-2.74 0-3.672-.643-3.672-2.707v-19.857h33.05c2.739 0 4.59-.237 4.59 1.805v1.805"></path><path d="m344.52 31.25v-.902-2.708h-8.263v2.708c0 2.157.702 4.296 1.537 5.744h11.08c-2.74 0-4.357-2.104-4.357-4.842"></path><path d="m383.08 30.346v-2.708h-8.263v2.708.902c0 2.738-1.617 4.842-4.362 4.842h11.1c.836-1.448 1.526-3.587 1.526-5.744"></path><path d="m425.31 25.832v41.519c0 2.523-.153 3.124-7.634 3.947-.637.07-2.061 3.386-2.061 3.386h9.396c5.102 0 8.572-1.367 8.561-6.431-.026-11.852 0-42.42 0-42.42h-8.262"></path><path d="m459.74 71.3c.586.993 0 1.354 0 1.354-5.779-1.489-13.224-9.586-15.15-22.45h8.263c-.0001-.0001 1.37 11.738 6.885 21.1"></path><path fill-rule="evenodd" d="m234.35 29.432h-35.818v-4.492h35.818v4.492"></path><path d="m233.43 15.904h-34.888c-6.191 0-8.263-.859-8.263-2.708 0 1.133 0 11.732 0 17.15 0 6.093 1.809 9.02 7.345 9.02h35.807 9.181v-15.343c-.002-6.093-3.646-8.123-9.182-8.123m.918 18.953h-32.13c-2.741 0-3.672-.871-3.672-3.609v-10.831h32.13c2.74 0 3.672-.032 3.672 2.708v11.732"></path><path d="m205.2 46.25c-3.938 5.417-12.175 14.665-23.18 20.2-.637.319-2.384 1.805-1.836 1.805 1.147 0 .479 0 3.672 0 7.262 0 27.05-13.988 29.609-22h-8.263"></path><path d="m223.1 46.25c-4.625 10.639-14.276 21.563-26.854 27.08-.654.286-1.926 1.24-1.377 1.24 1.376 0 2.066 0 2.754 0 8.409 0 29.902-12.262 33.741-28.317h-8.264"></path><path d="m247.2 53.02c0-6.095-3.645-10.944-9.181-10.944h-43.15c-1.977-.045-3.645-.172-4.132-1.241-.352-.771-1.376-.676-1.376-.676-1.069 6.146-2.452 10.509-8.263 13.538-.25.105-1.524 1.292-.688 1.354 1.619.119 4.143-.324 5.508-.677 3.185-.823 6.293-4.333 8.952-7.785h39.479c2.757.011 4.59.984 4.59 3.724v9.477c0 4.106-.745 11.507-14.502 11.507-.64 0-1.104 3.272-1.104 3.272h7.345c9.767 0 16.525-3.325 16.525-15.456v-6.093z"></path><path d="m455.61 39.37h-43.15c-2.741 0-4.344.015-4.132-2.595.224-2.775 1.377-17.262 1.377-17.262 3.71-.003 31.04-.176 46.13-1.016.884-.05.896-4.114 0-4.062-15.1.884-46.13.563-46.13.563h-8.264c0 0-.927 15.14-1.376 21.1-.453 6.01 3.186 7.785 8.722 7.785h50.5c-.165-2.75-.962-4.511-3.672-4.511"></path><path d="m398.69 71.3c-.585.993 0 1.354 0 1.354 5.778-1.489 13.682-9.586 15.608-22.45h-8.264c0-.0001-1.829 11.738-7.344 21.1"></path></g></svg></div>
  </div>
</div>
</div>
</template>

<script>
import {
    mapState
  } from 'vuex'
export default {
  name:'gexin',
  data(){
    return{}
  },
  created() {
      //页面初始化
      this.$store.dispatch('initRecommendPage');
  },
  computed:{
    ...mapState({
      PrSongList: state => state.recommend.PrSongList, //获取xuex的store文件里面的index文件中找PrSongList定义的文件的PrSongList函数获取
      newsong: state=> state.recommend.Newsong,
    })
  },
  methods:{
    ThisSongID(){
      this.$store.commit('set_ThisSongID',false);
    }
  }
}
</script>

<style lang="css">
.gexin_newsong_div_right{
  float: right;
    width: 42px;
    height: 100%;
}
.logo{
    padding-top: 16.9%;
}
.logosvg{
  display: block;
      margin: 0 auto;
      width: 230px;
      height: 44px;
}
.gexin_newsong{
  float: left;
}
.gexin_happy{
  width: 100%;
    height: 200px;
    float: left;
    background-image: url(../../assets/happy.png);
    background-size: contain;
    margin-top: 5px;
}
.gexin_bofang{
  background-image: url(/static/img/bofang.49a82fe.png);
      float: left;
      /* background-size: contain; */
      width: 22px;
      height: 22px;
      background-position: -24px 0;
      background-size: 166px 97px;
      /* padding: 0 10px; */
      margin: 17px 10px;
}
.gexin_newsong_div_left{
  padding: 6px 0;
  width: calc(100% - 52px);
  float: left;
  margin-left: 10px;
}
.gexin_newsong_div_left_bottom >p{
  font-size: 12px;
color: #888;
}
.gexin_newsong_div_left_top >span{
  color: #888;
margin-left: 4px;

}
.gexin_newsong_div{
  height: 100%;
        width: 100%;
}
.gexin_newsong_div_left_top{
  overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
word-break: normal;
    text-indent: -6px;
}
.gexin_newsong_div{
  font-size: 17px;
border-bottom: 1px solid rgb(246,246,247);
float: left;
}
.gexin_newsong >li{
  width: 100%;
height: 55px;
float: left;
}
.gexin_p2{
  font-size: 13px;
text-align: -webkit-center;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
}
.gexin_p{
  position: absolute;
font-size: 11px;
color: #fff;
    margin: 2px 0 0 70px;
text-shadow: 1px 0 0 rgba(0,0,0,.15);
}

 .gexin_ul >li{
   display: block;
    float: left;
    width: 33.3%;
    padding-left: 1px;
    padding-right: 1px;
    box-sizing: border-box;
    height: 180px;
}
.gexin_ul{
  float: left;
}
.gexin .list-item{
  position: relative;
    font-size: 0.95rem;
    color: #333;
    width: 100%;
    height: 45px;
    line-height: 0.45rem;
    font-weight: normal;
    float: left;
    /* margin-top: 40px; */
}
.list-item div{
  width: 2px;
  height: 13px;
  float: left;
  background: red;
  margin: 16px 10px 16px 0;
}
.list-item a{
      line-height: 45px;
}
.all_img{
width: 100%
}
</style>
