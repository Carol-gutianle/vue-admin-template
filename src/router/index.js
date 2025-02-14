import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

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

  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    meta: { title: '主控制台', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import('@/views/form/index'),
        meta: { title: '新增用户', icon: 'form' }
      },
      {
        path: '/DeleteUser',
        name: 'DeleteUser',
        component: () => import('@/views/deleteform/index'),
        meta: { title: '删除用户', icon: 'form' }
      }
    ]
  },

  {
    path: '/table',
    component: Layout,
    children: [
      {
        path: '/index',
        name: '操作记录',
        component: () => import('@/views/table/index'),
        meta: { title: '操作记录', icon: 'table' }
      }
    ]
  },

  {
    path: '/database',
    component: Layout,
    children: [
      {
        path: 'details',
        name: '数据库',
        component: () => import('@/views/datadisplay/index'),
        meta: { title: '数据库', icon: 'form' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
