<template lang="html">
<div class="SongListDetail">
<div class="SongListDetail_Top_first">
  <div class="SongListDetail_Top_first_1">
    <div class="SongListDetail_Top_first_1_1" @click="FHSYe"></div>
    <span>歌单</span>
  </div>
  <div class="SongListDetail_Top_first_2"  :style="{backgroundImage: 'url('+ songListDetails.coverImgUrl +')'}">
  </div>
  <div class="SongListDetail_Top_first_2_All">
    <div class="SongListDetail_Top_first_2_All_I">
      <div class="SongListDetail_Top_first_2_All_img" :style="{backgroundImage: 'url('+ songListDetails.coverImgUrl +')'}">

      </div>
    </div>
    <div class="SongListDetail_Top_first_2_All_Q">
      <h1>{{songListDetails.name}}</h1>
      <div class="SongListDetail_Top_first_2_All_Q_1">
        <div class="SongListDetail_Top_first_2_All_Q_1_img" :style="{backgroundImage: 'url('+ songListDetails.creator.avatarUrl +')'}"><!--songListDetailsTwo.avatarUrl-->
        </div>
        <span>{{songListDetails.creator.nickname}}</span>
        <ul class="SongListDetail_Top_ul">标签：
          <router-link v-for="(item,i) in songListDetails.tags" :key="i" tag="li" :to="{ name: '', params: {} }">
            <p>{{item}}</p>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="SongListDetail_Top_first_2_All_E">简介:
      {{songListDetails.description}}
    </div>
  </div>

</div>
<div class="SongListDetail_Two">
<div class="SongListDetail_Two_lb">
 歌曲列表<span>(共{{songListDetails.trackCount}}首)</span>
</div>
<ul>
  <router-link v-for="(item,i) in songListDetails.tracks" :key="i" tag="li" :to="{ name: 'SongDetails', params: {id:item.id} }">
    <div class="SongListDetail_Two_GeQu">
      <span class="SongListDetail_Two_GeQu_shuzi">{{i+1}}</span>
      <div class="SongListDetail_Two_GeQu_Connent">
        <div class="SongListDetail_Two_GeQu_Connent_top">
          <p class="SongListDetail_Two_GeQu_Connent_top_1">{{item.name}}</p>
        </div>
        <div class="SongListDetail_Two_GeQu_Connent_Bottom">
          <p class="SongListDetail_Two_GeQu_Connent_Bottom_1">{{item.artists[0].name+'-'+item.album.name}}</p>
        </div>
      </div>
      <div class="SongListDetail_Two_GeQu_bofang">
        <div class="SongListDetail_Two_GeQu_bofang_img">
        </div>
      </div>
    </div>
  </router-link>
</ul>
</div>
</div>
</template>

<!-- 简介:
res.data.result.name 偶像与粉丝
               .coverImgUrl  图片
res.data.result.tags 标签
res.data.result.description  诗词
res.data.result.playCount 33万
res.data.result.creator 用户名
res.data.result.creator.avatarUrl  用户头像
res.data.result.creator.nickname   用户名
res.data.result.commentCount  歌单评论数
res.data.result.shareCount  歌单分享数
res.data.result.subscribedCount 收藏数
res.data.result.trackCount    歌曲数
res.data.result.tracks        歌曲
res.data.result.tracks.name  歌曲名
res.data.result.tracks.album 歌曲详细来源
res.data.result.tracks.album.artists[0].name  歌曲演唱人
res.data.result.tracks.album.name  全面沦陷  歌曲专辑名
res.data.result.tracks.album.type   歌曲类别
-->
<script>

export default {
  name:'SongListDetail',
  data(){
    return{
      avatarUrl:"",
    }
  },
  created(){
    this.$store.dispatch('SongListDetails', {
        id: this.$route.params.id
    });
  },
  computed:{
    songListDetails() {
      return this.$store.state.songListDetails;
    },
  },
  methods:{
    FHSYe(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="css">
.SongListDetail_Two_GeQu_bofang_img{
  background-image: url(../../assets/bofang.png);
  float: left;
  width: 22px;
  height: 22px;
  background-position: -24px 0;
  background-size: 166px 97px;
  margin: 17px 10px;
}
.SongListDetail_Two_GeQu_bofang{
  float: right;
  width: 42px;
  height: 100%;
}
.SongListDetail_Two_GeQu_Connent{
  float: left;
  width: calc(100% - 82px);
  padding: 7px 0;
  border-bottom: 1px solid rgb(242,242,242);
}
.SongListDetail_Two_GeQu_Connent_Bottom_2{

}
.SongListDetail_Two_GeQu_Connent_Bottom_1{
  font-size: 12px;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
}
.SongListDetail_Two_GeQu_Connent_top_1{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
  font-size: 17px;
}
.SongListDetail_Two li{
    display: inline-block;
    width: 100%;
}
.SongListDetail_Two_GeQu_shuzi{
  float: left;
      width: 40px;
      height: 55px;
      text-align: center;
      line-height: 55px;
      color: #999;
      font-size: 17px;
}
.SongListDetail_Two_lb{
  width: 100%;
      text-align: center;
      font-size: 14px;
      padding: 10px 0;
      border-bottom: 1px solid rgb(245,246,247);
}
.SongListDetail_Two{
  width: 100%;
  height: 100%;
  position: absolute;
  background: #fff;
  border-radius: 15px;
}
.SongListDetail_Top_first{
  width: 100%;
      height: 265px;
}
.SongListDetail_Top_first_2_All_E{
  height: 130px;
      float: left;
      color: #fff;
      overflow: hidden;
      padding: 5px 20px;
      font-size: 14px;
}
.SongListDetail_Top_ul{
  font-size: 14px;
  color: #fff;
}
.SongListDetail_Top_ul li{
  display: inline-block;
  margin-right: 5px;
  padding: 1px 8px;
  font-size: 12px;
  border-radius: 20%;
}
.SongListDetail_Top_first_2_All_Q_1 span{
  font-size: 14px;
  color: #fff;
  margin: 10px;
  line-height: 50px;
}
.SongListDetail_Top_first_2_All_Q_1_img{
  width: 30px;
      height: 30px;
      background-size: 100%;
      float: left;
      margin: 10px 0;
      border-radius: 50%;
}
.SongListDetail_Top_first_2_All_Q_1{
width: 100%;
height: 50px;
margin-top: 20px;
}
.SongListDetail_Top_first_2_All_Q h1{
  font-size: 17px;
  font-weight: bolder;
  color: #fff;
  width: 100%;
  padding: 5px 0 0 0;
}
.SongListDetail_Top_first_2_All_Q{
  width: calc(100% - 180px);
height: 100%;
float: left;
}
.SongListDetail_Top_first_2_All_I{
  width: 140px;
  height: 140px;
  float: left;
  margin: 5px 20px;
}
.SongListDetail_Top_first_2_All_img{
width: 100%;
height: 100%;
background-size: 100%;
    border-radius: 5px;
}
.SongListDetail_Top_first_2_All{
  width: 100%;
  height: 150px;
  top: 70px;
  position: absolute;
}
.SongListDetail_Top_first_2{
  width: 375px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  -webkit-filter: blur(20px);
  filter: blur(50px);

}
.SongListDetail_Top_first_1 span{
  font-size: 16px;
  line-height: 50px;
}
.SongListDetail{
  width: 100%;
  height:100%;
}
.SongListDetail_Top_first_1{
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 10;
  color: #fff;
}
.SongListDetail_Top_first_1_1{
background-image: url("../../assets/zuo_1.png");
width: 30px;
height: 30px;
background-size: 100%;
float: left;
margin: 10px;
}
</style>
r
