const apiList = {
  //获取推荐歌单{个性推荐}
  queryPrSongList: "/personalized",
  queryNewSong:'/personalized/newsong',
  queryMusicTopB:'/top/list?idx=3',
  queryMusicNewgebang:'/top/list?idx=0',
  queryMusicyuanchuangbang:'/top/list?idx=2',
  queryMusicergebnag:'/top/list?idx=1',
  queryMusicdianying:'/top/list?idx=4',
  queryMusicKTV:'/top/list?idx=7',
  queryReMeng:'/search/hot',
  //歌单详情
  querySongListDetail:'/playlist/detail',
  //音乐url
  queryMusicUrl:'/music/url',
  //歌曲详情
  querySongDetails:'/song/detail',
  //歌词
  queryLyric:'/lyric',
  //搜索
  querySs:'/search',
}
module.exports = apiList;
