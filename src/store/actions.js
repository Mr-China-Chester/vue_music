import getData from '../api/getData'
export default{
  async ReMengKaishi(context){
    context.dispatch('set_ReMeng');
  },
  async MusicTopList(context){
    //context.commit('update_Loding', true);
    context.dispatch('set_MusicTopList');
    context.dispatch('set_MusicNewgebang');
    context.dispatch('set_Musicyuanchuangbang');
    context.dispatch('set_Musicergebnag');
    context.dispatch('set_Musicdianying');
    context.dispatch('set_MusicKTV');
    //context.commit('update_Loding', false);
  },
  async set_MusicTopList(context){
    context.commit('update_Loding', true);
    let res = await getData('queryMusicTopB');
    context.commit('set_store_MusicUpTopList', res.data.playlist);
    // 把歌单替换
    //context.commit('set_store_SongListDetails',res.data.playlist);
  },
  async set_MusicNewgebang(context){
    let res = await getData('queryMusicNewgebang');
    context.commit('set_store_MusicNewgebang',res.data.playlist);
  //  context.commit('set_store_SongListDetails',res.data.playlist);
  },
  async set_Musicyuanchuangbang(context){
    let res = await getData('queryMusicyuanchuangbang');
    context.commit('set_store_Musicyuanchuangbang',res.data.playlist);
    //context.commit('set_store_SongListDetails',res.data.playlist);
  },
  async set_Musicergebnag(context){
    let res = await getData('queryMusicergebnag');
    context.commit('set_store_Musicergebnag',res.data.playlist);
    //context.commit('set_store_SongListDetails',res.data.playlist);
  },
  async set_Musicdianying(context){
    let res = await getData('queryMusicdianying');
    context.commit('set_store_Musicdianying',res.data.playlist);
    //context.commit('set_store_SongListDetails',res.data.playlist);
  },
  async set_MusicKTV(context){
    let res = await getData('queryMusicKTV');
    context.commit('set_store_MusicKTV',res.data.playlist);
    //context.commit('set_store_SongListDetails',res.data.playlist);
    context.commit('update_Loding', false);
  },
  async set_ReMeng(context){
    let res = await getData('queryReMeng');
    context.commit('set_store_ReMeng',res.data.result.hots);
  },
  async SongListDetails(context,payload){
    context.commit('set_ThisSongID',payload.id);
    context.commit('update_Loding', true);
    let res = await getData('querySongListDetail',payload);
    context.commit('set_store_SongListDetails',res.data.result);
    context.commit('update_Loding', false);
  },

  //
  // async AllSearch(context,payload){
  //   context.dispatch('get_ThisSearch',payload);
  //   context.dispatch('get_ThisSearchSinger',payload);
  //   context.dispatch('get_ThisSearchPlaylist',payload);
  // },
  // 搜索
  async get_ThisSearch(context,payload){

    let res = await getData('querySs',payload);
    if(res.data.result == undefined){
      return
    }else{
      context.commit('set_ThisSearch',res.data.result.songs);
    }
  },
  async get_ThisSearchSinger(context,payload){
    let res = await getData('querySs',payload);
    if(res.data.result == undefined){
      return
    }else{
      context.commit('set_ThisSearchSinger',res.data.result.artists);
    }

  },
  async get_ThisSearchPlaylist(context,payload){
    let res = await getData('querySs',payload);
    if(res.data.result == undefined){
      return
    }else{
      context.commit('set_ThisSearchPlaylist',res.data.result.playlists);
    }

  },



  // 控制loding
  startLoding({commit},status){
      commit('update_Loding', status)
  },
}
