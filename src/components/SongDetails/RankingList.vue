<template lang="html">
  <div class="RankingList">
    <div class="RankingList_GD">
      <div class="RankingList_Top" :style="{backgroundImage:'url('+Ranking.coverImgUrl+')'}">
        <div class="RankingList_Top_Go" @click="RankingListGo">

        </div>
        <div class="" >
          {{Ranking.name}}
        </div>
      </div>
    </div>
    <div class="RankingList_Connent">
      <ul>
        <router-link v-for="(item,i) in Ranking.tracks" :key="i" tag="li" :to="{ name: 'SongDetails', params: {id:item.id} }">
          <div class="RankingList_GeQu">
            <span class="RankingList_GeQu_shuzi">{{i+1}}</span>
            <div class="RankingList_GeQu_Connent">
              <div class="RankingList_GeQu_Connent_top">
                <p class="RankingList_GeQu_Connent_top_1">{{item.name}}</p>
              </div>
              <div class="RankingList_GeQu_Connent_Bottom">
                <p class="RankingList_GeQu_Connent_Bottom_1">{{item.ar[0].name+'-'+item.al.name}}</p>
              </div>
            </div>
            <div class="RankingList_bofang">
              <div class="RankingList_bofang_img">

              </div>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'RankingList',
  data(){
    return{

    }
  },
  created(){
    //获取当前是哪个排行榜
    //let changeThis = this.$route.params.id;
    this.$store.commit('set_ThisRankingList',this.$route.params.id);
    this.$store.commit('set_ThisSongID',this.$route.params.id)

  },
  computed:{
    ChangeT(){
      return this.$store.state.ThisRankingList;
    },
    Ranking(){
      if(this.ChangeT == 1){
        return this.$store.state.MusicUpTopList;
      }else if(this.ChangeT == 2){
        return this.$store.state.MusicNewgebang;
      }else if(this.ChangeT == 3){
        return this.$store.state.Musicyuanchuangbang;
      }else if(this.ChangeT == 4){
        return this.$store.state.Musicergebnag;
      }else if(this.ChangeT == 5){
        return this.$store.state.Musicdianying;
      }else if(this.ChangeT == 6){
        return this.$store.state.MusicKTV;
      }
    }
  },
  methods:{
    RankingListGo(){
      this.$router.push({
        name:'gedang'
      })
    }
  }
}
</script>

<style lang="css">
.RankingList_Connent{
  margin-top: 47px;
float: left;
width: 100%;
}
.RankingList_Connent li{
  display: inline-block;
  width: 100%;
}
.RankingList_GeQu_shuzi{
  float: left;
      width: 40px;
      height: 55px;
      text-align: center;
      line-height: 55px;
      color: #999;
      font-size: 17px;
}
.RankingList_GeQu_Connent{
  float: left;
  width: calc(100% - 82px);
  padding: 7px 0;
  border-bottom: 1px solid rgb(242,242,242);
}
.RankingList_GeQu_Connent_top{

}
.RankingList_GeQu_Connent_top_1{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
  font-size: 17px;
}
.RankingList_GeQu_Connent_Bottom{

}
.RankingList_GeQu_Connent_Bottom_1{
  font-size: 12px;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: normal;
}
.SongListDetail_Two_GeQu_Connent_Bottom_2{

}
.RankingList_bofang{
  float: right;
    width: 42px;
    height: 100%;
}
.RankingList_bofang_img{
  /* background-image: url(/static/img/bofang.49a82fe.png); */
  background-image: url(../../assets/bofang.png);
      float: left;
      /* background-size: contain; */
      width: 22px;
      height: 22px;
      background-position: -24px 0;
      background-size: 166px 97px;
      /* padding: 0 10px; */
      margin: 17px 10px;
}

.RankingList_Top_Go{
  background-image: url("../../assets/zuo_1.png");
  width: 17px;
  height: 17px;
  background-size: 100%;
  float: left;
  margin: 0 10px;
}
.RankingList_Top{
  padding: 15px 0;
  font-size: 14px;
  color: #fff;
  font-family: '\5B8B\4F53';
  position: fixed;
  width: 100%;
}
.RankingList{

}
</style>
