export default {
  //设置推荐歌单
  set_Recommend_PrSongList(state, payload) {
    state.PrSongList = payload;
  },
  set_Recommend_Newsong(state, payload){
    state.Newsong = payload;
  },
}
