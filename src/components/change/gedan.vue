<template lang="html">
<div class="gedang">
  <div class="gedang_guangfang">
    官方榜
  </div>
  <div class="paihangbang">
    <div class="paihangbang_img" @click="SoaringList">
      <img v-lazy="MusicUpTopList.coverImgUrl">
      <div class="paihangbang_all">
        <router-link v-for="(item,i) in MusicUpTopList.tracks" v-if='i<=2' :key="i" tag="li" :to="{ name: '', params: {} }">
          <div class="paihangbang_all_right">
            <p>{{i+1+"."+item.name+'-'+item.ar[0].name}}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="paihangbang_img" @click="NewSongList">
      <img v-lazy="MusicNewgebang.coverImgUrl">
      <div class="paihangbang_all">
        <router-link v-for="(item,i) in MusicNewgebang.tracks" v-if='i<=2' :key="i" tag="li" :to="{ name: '', params: {} }">
          <div class="paihangbang_all_right">
            <p>{{i+1+"."+item.name+'-'+item.ar[0].name}}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="paihangbang_img" @click="OriginalList">
      <img v-lazy="Musicyuanchuangbang.coverImgUrl">
      <div class="paihangbang_all">
        <router-link v-for="(item,i) in Musicyuanchuangbang.tracks" v-if='i<=2' :key="i" tag="li" :to="{ name: '', params: {} }">
          <div class="paihangbang_all_right">
            <p>{{i+1+"."+item.name+'-'+item.ar[0].name}}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="paihangbang_img" @click="HotSongList">
      <img v-lazy="Musicergebnag.coverImgUrl">
      <div class="paihangbang_all">
        <router-link v-for="(item,i) in Musicergebnag.tracks" v-if='i<=2' :key="i" tag="li" :to="{ name: '', params: {} }">
          <div class="paihangbang_all_right">
            <p>{{i+1+"."+item.name+'-'+item.ar[0].name}}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="paihangbang_img" @click="ListOfNewPower">
      <img v-lazy="Musicdianying.coverImgUrl">
      <div class="paihangbang_all">
        <router-link v-for="(item,i) in Musicdianying.tracks" v-if='i<=2' :key="i" tag="li" :to="{ name: '', params: {} }">
          <div class="paihangbang_all_right">
            <p>{{i+1+"."+item.name+'-'+item.ar[0].name}}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="paihangbang_img" @click="ListOfKTV">
      <img v-lazy="MusicKTV.coverImgUrl">
      <div class="paihangbang_all">
        <router-link v-for="(item,i) in MusicKTV.tracks" v-if='i<=2' :key="i" tag="li" :to="{ name: '', params: {} }">
          <div class="paihangbang_all_right">
            <p>{{i+1+"."+item.name+'-'+item.ar[0].name}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>
<!--
res.data.playlist.coverImgUrl  图片
res.data.playlist.description  每日更新
res.data.playlist.tracks       歌曲
res.data.playlist.tracks[0].ar[0].name
 -->
<script>
import {
    mapState
} from 'vuex'
export default {
  name:'gedang',
  data(){
    return{}
  },
  created(){
    this.$store.dispatch('MusicTopList');
  },
  computed:{
    ...mapState({
      //飙升榜
      MusicUpTopList:state=>state.MusicUpTopList,
      MusicNewgebang:state=>state.MusicNewgebang,
      Musicyuanchuangbang:state=>state.Musicyuanchuangbang,
      Musicergebnag:state=>state.Musicergebnag,
      Musicdianying:state=>state.Musicdianying,
      MusicKTV:state=>state.MusicKTV,
    })
  },
  methods:{
    SoaringList(){
      this.$router.push({
        name:'RankingList',
        params:{
          id:1
        }
      })
      this.$store.commit('set_store_SongListDetails',this.MusicUpTopList)
    },
    NewSongList(){
      this.$router.push({
        name:'RankingList',
        params:{
          id:2
        }
      })
      this.$store.commit('set_store_SongListDetails',this.MusicNewgebang)
    },
   OriginalList(){
     this.$router.push({
       name:'RankingList',
       params:{
         id:3
       }
     })
     this.$store.commit('set_store_SongListDetails',this.Musicyuanchuangbang)
   },
   HotSongList(){
     this.$router.push({
       name:'RankingList',
       params:{
         id:4
       }
     })
     this.$store.commit('set_store_SongListDetails',this.Musicergebnag)
   },
   ListOfNewPower(){
     this.$router.push({
       name:'RankingList',
       params:{
         id:5
       }
     })
     this.$store.commit('set_store_SongListDetails',this.Musicdianying)
   },
   ListOfKTV(){
     this.$router.push({
       name:'RankingList',
       params:{
         id:6
       }
     })
     this.$store.commit('set_store_SongListDetails',this.MusicKTV)
   },
  }

}
</script>

<style lang="css">
.gedang{
    /* margin-top: 40px; */
}
.paihangbang{
  margin-bottom: 10px;
}
.paihangbang_img{
  height: 122px;
  padding-top: 2px;
}
.paihangbang_all_right > span{
  float: left;
  line-height: 26px;
  color: rgb(121, 121, 121);
}
.paihangbang_all_right >p{
  float: left;
  color: rgb(105,105,105);
  padding:0 4px 0 0;
  line-height: 26px;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
width: 100%;
}
.paihangbang_all_right{
  width: 100%;
  height: 24px;
  float: left;
  padding: 8px;
  font-size: 15px;
}
.paihangbang_all{
  float: left;
  border-bottom: 1px solid rgb(231,233,234);
  width: calc(100% - 130px);
}
.paihangbang_all > li{
  width: 100%;
      list-style-type: none;
}
.paihangbang_img > img{
  width: 120px;
  margin: 1px 5px;
  border-radius: 5px;
  float: left;
}
.gedang_guangfang{
  font-size: 14px;
  padding: 10px 5px;
}
</style>
