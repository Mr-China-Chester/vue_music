export default{
   set_store_MusicUpTopList(state, payload) {
     state.MusicUpTopList = payload
   },
   set_store_MusicNewgebang(state, payload) {
     state.MusicNewgebang = payload
   },
   set_store_Musicyuanchuangbang(state, payload) {
     state.Musicyuanchuangbang = payload
   },
   set_store_Musicergebnag(state, payload) {
     state.Musicergebnag = payload
   },
   set_store_Musicdianying(state, payload) {
     state.Musicdianying = payload
   },
   set_store_MusicKTV(state, payload) {
     state.MusicKTV = payload
   },
   set_store_ReMeng(state,payload){
     state.ReMeng = payload
   },
   set_store_SongListDetails(state,payload){
     state.songListDetails = payload
   },
   //改变loading状态
   update_Loding(state,payload){
     state.loading = payload;
   },
   set_ThisSongID(state,payload){
      state.ThisSongID = payload;
   },
   set_ThisRankingList(state,payload){
     state.ThisRankingList = payload;
   },
   set_ThisSearch(state,payload){
     state.ThisSearch = payload;
   },
   set_ThisSearchSinger(state,payload){
     state.ThisSearchSinger = payload;
   },
   set_ThisSearchPlaylist(state,payload){
     state.ThisSearchPlaylist = payload;
   },
}
