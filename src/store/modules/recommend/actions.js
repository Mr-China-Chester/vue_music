import getData from '../../../api/getData';
export default{
  async initRecommendPage(context){
    //获取推荐歌单
    context.dispatch('get_Recommend_PrSongList');
    context.dispatch('get_Recommend_Newsong');
  },
  //获取推荐歌单
  async get_Recommend_PrSongList(context) {
    let res = await getData('queryPrSongList');
    context.commit('set_Recommend_PrSongList', res.data.result);
  },
  //获取最新音乐
  async get_Recommend_Newsong(context) {
    let res = await getData('queryNewSong');
    context.commit('set_Recommend_Newsong', res.data.result);
  },
}
