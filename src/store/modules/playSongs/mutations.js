export default{

  set_MusicUrl(state, payload){
    state.musicUrl = payload;
  },
  set_SongDetails (state, payload){
    state.songDetails = payload;
  },
  set_Lyric(state, payload){
    state.Lyric = payload;
  },
  set_Status(state, payload){
    state.playStatus = payload;
  },
  set_MusicCurtime(state, payload){
    state.musicCurtime = payload;
  },
  set_MusicDuration(state,payload){
    state.musicDuration = payload;
  },
  set_CurMusic(state,payload){
    state.curMusic = payload;
  },
  set_Playxh(state,payload){
    state.playxh = payload;
  },
  set_OFBottom(state,payload){
    state.OFBottom = payload;
  },
  set_ThisMusicID(state,payload){
    state.ThisMusicID = payload;
  },
  set_ThisListOpen(state,payload){
    state.ThisListOpen = payload;
  },
}
