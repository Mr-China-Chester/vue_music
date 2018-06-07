# music_new

> A Vue.js project
##仿网易云音乐

因为想要提升自己的vue能力去网上找项目做，一看这么多人弄过音乐就想尝试一下，找了一个不错的案例去模仿[地址](https://github.com/webfansplz/xcMusic)

##API[来源](https://binaryify.github.io/NeteaseCloudMusicApi/#/)

##技术栈

```
vue2.0 + vuex + vue-router2.0 + es6 + axios + vux +element-ui + vue-lazyload
```
##文件结构
```
├── build                       构建服务和webpack配置
├── config                      项目不同环境的配置
├── dist                        项目build目录
├── index.html                  项目入口文件
├── package.json                项目配置文件
├── static       	            静态资源
├── src                         生产目录
    |—— api                     api列表和数据处理
    |——|—— apiList.js           api列表
    |——|—— getData.js           数据处理(封装一个axios请求)    
    |—— assets                  静态资源(img)
    |——|—— img                  静态图片
    |—— components              公用组件
    |——|—— change               三大页面组件
    |——|—— details              歌单组件
    |——|—— Header_vue           头部顶部组件            
    |——|—— music                音乐组件
    |——|—— SongDetails          播放器组件
    |—— router                  路由组件
    |—— store                   数据状态管理组件
    |—— util                    公用方法
```

### 完成功能
-   个性推荐,排行榜，搜索页面   
-   播放功能(快进,快退,上一曲,下一曲,歌词同步,自动播放等)
-   搜索功能(热门搜索,单曲,歌手,歌单)
-   歌单功能(最新,最热,精品歌单及详情展示)
-   排行榜功能(云音乐官方版)

### 展示图
![个性推荐](https://github.com/Mr-China-Chester/vue_music/blob/master/src/assets/imgs/music_one.png)  
![排行榜](https://github.com/Mr-China-Chester/vue_music/blob/master/src/assets/imgs/music_two.png)  
![搜索](https://github.com/Mr-China-Chester/vue_music/blob/master/src/assets/imgs/music_tree.png)  
![飙升榜](https://github.com/Mr-China-Chester/vue_music/blob/master/src/assets/imgs/music_seven.png)  
![歌单](https://github.com/Mr-China-Chester/vue_music/blob/master/src/assets/imgs/music_four.png)  
![播放器](https://github.com/Mr-China-Chester/vue_music/blob/master/src/assets/imgs/music_five.png)  
![播放器2](https://github.com/Mr-China-Chester/vue_music/blob/master/src/assets/imgs/music_six.png)  




## Build Setup


``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
