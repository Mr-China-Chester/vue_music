import getData from '../../../api/getData';
export default{
  //调用获取其他详细信息
  async get_PlaySongDetails(context, payload){
    context.dispatch('get_musicUrl',payload);
    context.dispatch('get_songDetails',{
      ids: payload
    });
    context.dispatch('get_Lyric',{
      id: payload
    });
  },
  //获取音乐url
  async get_musicUrl(context, payload){
    let res = await getData('queryMusicUrl',{
      id:payload
    });
    if(res.data.data[0].url == null){
      console.log("此音乐url获取失败");
      let url = context.rootState.playSongs.musicUrl;
      if(url == "" || url == 'Nulls'){
        context.commit('set_MusicUrl','Null');
      }else{
        context.commit('set_MusicUrl','Nulls');
      }
    }else{
      //获取当前播放音乐的id
      context.commit('set_ThisMusicID',payload);
      //进入播放器的时候关闭底部按钮
      context.commit('set_OFBottom',false);
      context.commit('set_MusicUrl',res.data.data[0].url);
    }
  },
  //获取歌曲详情
  async get_songDetails(context, payload){
    let res = await getData('querySongDetails',payload);
    context.commit('set_SongDetails',res.data);
  },
  //获取音乐歌词
  async get_Lyric(context, payload){
    let res = await getData('queryLyric', payload);
    if (res.data.lrc != undefined) {
      context.commit('set_Lyric', res.data.lrc.lyric);
    } else {

      context.commit('set_Lyric', '[00:00.00]获取歌词失败!');
    }
  },
  //上下一首判断
  async get_SwitchSongs(context, payload){
    //获取列表歌曲
    let songListDetails = context.rootState.songListDetails.tracks;
    let status = false;
    if(songListDetails.length > 0){
      for(let i=0;i<songListDetails.length;i++){
        if(songListDetails[i].id == payload.id){
          //判断点击是上一首还是下一首 prev上一首 next 下一首
          if(payload.type == 'prev'){
            if(i == 0){
              //判断是不是第一首歌曲 是的话就选最后一首
              // 判断循环方式 1 列表循环  2 随机循环 3 单曲循环
              if(payload.change == '1'){
                return songListDetails[songListDetails.length - 1].id;
              }else if(payload.change == '2'){
                // 获取随机数 在范围之内
                let random=Math.floor(Math.random()*(songListDetails.length-0+1)+0);
                return songListDetails[random].id;
              }else if(payload.change == '3'){
                //
                return payload.id;
              }
            }else{

              if(payload.change == '1'){
                return songListDetails[i - 1].id;
              }else if(payload.change == '2'){
                // 获取随机数 在范围之内
                let random=Math.floor(Math.random()*(songListDetails.length-0+1)+0);
                return songListDetails[random].id;
              }else if(payload.change == '3'){
                //
                return payload.id;
              }


              //return songListDetails[i - 1].id;
            }
          }else{
            // 判断 当前歌曲是不是最后一首
            if(i == songListDetails.length - 1){

              if(payload.change == '1'){
                return songListDetails[0].id;
              }else if(payload.change == '2'){
                // 获取随机数 在范围之内
                let random=Math.floor(Math.random()*(songListDetails.length-0+1)+0);
                return songListDetails[random].id;
              }else if(payload.change == '3'){
                //
                return payload.id;
              }

              //return songListDetails[0].id;
            }else{

              if(payload.change == '1'){
                return songListDetails[i + 1].id;
              }else if(payload.change == '2'){
                // 获取随机数 在范围之内
                let random=Math.floor(Math.random()*(songListDetails.length-0+1)+0);
                return songListDetails[random].id;
              }else if(payload.change == '3'){
                //
                return payload.id;
              }

              //return songListDetails[i + 1].id;
            }
          }
          status = true;
        }
      }
      if (status == false) {
        return false;
      }
    }
  },
}
// queryMusicUrl querySongDetails queryLyric
