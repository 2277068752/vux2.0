export default {
  defaultTitle: 'vux模板',
  routes: [
    {
      path: '/',
      component: function (resolve) {
        require(['@/pages/Index'], resolve)
      },
      meta: {title: '首页'}
    },
    {
      path: '/index',
      component: function (resolve) {
        require(['@/pages/Index'], resolve)
      },
      meta: {title: '首页'}
    },
    {
      path: '/input',
      component: function (resolve) {
        require(['@/pages/Demos/Input'], resolve)
      },
      meta: {title: '常用的输入框'}
    },
    {
      path: '/dialog',
      component: function (resolve) {
        require(['@/pages/Demos/Dialog'], resolve)
      },
      meta: {title: '弹窗'}
    },
    {
      path: '/pullDownAndpullUp',
      component: function (resolve) {
        require(['@/pages/Demos/PullDownAndPullUp'], resolve)
      },
      meta: {title: '上拉加载&下拉刷新'}
    },
    {
      path: '/banner',
      component: function (resolve) {
        require(['@/pages/Demos/Banner'], resolve)
      },
      meta: {title: 'Banner'}
    },
    {
      path: '/guide',
      component: function (resolve) {
        require(['@/pages/Demos/Guide'], resolve)
      },
      meta: {title: '引导页'}
    }
  ]
}
