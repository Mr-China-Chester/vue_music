import Vue from 'vue'
import Router from 'vue-router'
import changes from '@/components/Header_vue/change'

const gedang = r => require.ensure([], () => r(require('@/components/change/gedan')), 'gedang')
const gexin = r => require.ensure([], () => r(require('@/components/change/gexintuijian')), 'gexin')
const soushou = r => require.ensure([], () => r(require('@/components/change/soushouthis')), 'soushou')
const SongListDetail = r => require.ensure([], () => r(require('@/components/details/SongListDetails')), 'SongListDetail')
const SongDetails = r => require.ensure([], () => r(require('@/components/SongDetails/SongDetails')), 'SongDetails')
const RankingList = r => require.ensure([],()=> r(require('@/components/SongDetails/RankingList')),'RankingList')
Vue.use(Router)

export default new Router({
  mode: 'history', //去掉路由地址的#
  routes: [
    {
      path: '/',
      name: 'gexin',
      component: gexin
    },
    {
      path: '/gedang',
      name: 'gedang',
      component: gedang
    },
    // {
    //   path: '/gexin',
    //   name: 'gexin',
    //   component: gexin
    // },
    {
      path: '/soushou',
      name: 'soushou',
      component: soushou
    },
    {
      path: '/SongListDetail/:id',
      name: 'SongListDetail',
      component: SongListDetail
    },
    {
      path: '/SongDetails/:id',
      name: 'SongDetails',
      component: SongDetails
    },
    {
      path: '/RankingList/:id',
      name: 'RankingList',
      component: RankingList
    },
  ]
})
