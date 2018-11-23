import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Firstlogin from '@/pages/Firstlogin'
import Setlink from '@/pages/Setlink'
import NomarlLog from '@/pages/NomarlLog'
import demo from '@/pages/demo'
import prove from '@/pages/prove'
import mine from '@/pages/mine'
import makesureLogin from '@/pages/makesureLogin'
import proveIn from '@/pages/proveIn'
import updateprove from '@/pages/updateprove'
import proveDetails from '@/pages/proveDetails'
import assetprove from '@/pages/assetprove'
import bioAssay from '@/pages/bio-assay'
import scan from '@/pages/scan'
import lookprove from '@/pages/lookprove'
import addprove from '@/pages/addprove'
import addsuccess from '@/pages/addproveSuccess'
import afterupdateprove from '@/pages/afterupdateprove'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/firstlogin',
      name: 'Firstlogin',
      component: Firstlogin
    },
    {
      path: '/setlink',
      name: 'Setlink',
      component: Setlink
    },
    {
      path: '/nomarlLog',
      name: 'NomarlLog',
      component: NomarlLog
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/prove',
      name: 'prove',
      component: prove
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/makesureLogin',
      name: 'makesureLogin',
      component: makesureLogin
    },
    {
      path: '/proveIn',
      name: 'proveIn',
      component: proveIn
    },
    {
      path: '/updateprove',
      name: 'updateprove',
      component: updateprove
    },
    {
      path: '/proveDetails',
      name: 'proveDetails',
      component: proveDetails
    },
    {
      path: '/assetprove',
      name: 'assetprove',
      component: assetprove
    },
    {
      path: '/bioAssay',
      name: 'bioAssay',
      component: bioAssay
    },
    {
      path: '/scan',
      name: 'scan',
      component: scan
    },
    {
      path: '/lookprove',
      name: 'lookprove',
      component: lookprove
    },
    {
      path: '/addprove',
      name: 'addprove',
      component: addprove
    },
    {
      path: '/addsuccess',
      name: 'addsuccess',
      component: addsuccess
    },
    {
      path: '/afterupdateprove',
      name: 'afterupdateprove',
      component: afterupdateprove
    },
  ]
})

