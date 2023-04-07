import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/layout'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 首页
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {title: '首页', icon: 'QQ空间'}
    }]
  },

  // 地图
  {
    path: '/echart',
    component: Layout,
    name: 'echart',
    meta: {title: '地图', icon: 'el-icon-location'},
    alwaysShow: true,
    children: [
      {
        path: 'map',
        component: () => import('@/views/echart/index'),
        name: 'map',
        meta: {title: '中国地图', icon: 'el-icon-s-marketing'}
      }
    ]
  },
  // 工具
  {
    path: '/tools',
    component: Layout,
    name: 'echart',
    meta: {title: '工具', icon: 'el-icon-s-cooperation'},
    alwaysShow: true,
    children: [
      {
        path: 'map',
        component: () => import('@/views/tools/tinymce/tinymce'),
        name: 'map',
        meta: {title: '富文本编辑器', icon: '富文本编辑器'}
      },
      {
        path: 'icons',
        name: 'icons',
        component: () => import('@/views/tools/icons/svg-icon'),
        meta: {title: 'svg小图标', icon: '知乎'}
      },
      {
        path: 'svg',
        name: 'Svg',
        component: () => import('@/views/tools/icons/index'),
        meta: {title: '选择小图标', icon: 'wordpress'}
      }
    ]
  },
  // form表单
  {
    path: '/form',
    component: Layout,
    meta: {title: 'form表单', icon: 'el-icon-s-cooperation'},
    alwaysShow: true,
    children: [
      {
        path: 'form',
        component: () => import('@/views/form/index'),
        name: 'form',
        meta: {title: '自定义校验规则', icon: 'ie浏览器'}
      },
    ]
  },

  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
