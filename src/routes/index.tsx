import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'


const routes: RouteConfig[] = [
  {
    path: '/',
    component: lazy(() => import('../pages/common/home')),
    exact: true,
    breadcrumb: [
      { title: '首页' }
    ],
    permission: ['admin','service']
  },

  //财务管理
  {
    path: '/finance',
    component: lazy(() => import('../pages/finance')),
    breadcrumb: [
      { title: '财务管理' },
      { title: '财务列表' }
    ]
  },

  //订单管理
  {
    path: '/order/orderDetails',
    component: lazy(() => import('../pages/order/orderDetails')),
    breadcrumb: [
      { title: '订单管理' },
      { title: '订单列表',to: '/order/orderList' },
      { title: '订单详情' }
    ]
  },
  {
    path: '/order/orderList',
    component: lazy(() => import('../pages/order/orderList')),
    breadcrumb: [
      { title: '订单管理' },
      { title: '订单列表' }
    ]
  },

   //客服系统
   {
    path: '/service/currentSession',
    component: lazy(() => import('../pages/service/currentSession')),
    breadcrumb: [
      { title: '客服系统' },
      { title: '当前会话' }
    ],
    permission: ['admin','service']
  },
  {
    path: '/service/customerSevice',
    component: lazy(() => import('../pages/service/customerSevice')),
    breadcrumb: [
      { title: '客服系统' },
      { title: '客户中心' }
    ],
    permission: ['admin','service']
  },
  {
    path: '/service/orderCenter',
    component: lazy(() => import('../pages/service/orderCenter')),
    breadcrumb: [
      { title: '客服系统' },
      { title: '工单中心' }
    ],
    permission: ['admin','service']
  },
  {
    path: '/service/sessionStatistics',
    component: lazy(() => import('../pages/service/sessionStatistics')),
    breadcrumb: [
      { title: '客服系统' },
      { title: '会话统计' }
    ],
    permission: ['admin','service']
  },

  //用户管理
  {
    path: '/user/userList',
    component: lazy(() => import('../pages/user/userList')),
    breadcrumb: [
      { title: '用户管理' },
      { title: '用户列表' }
    ]
  },
  {
    path: '/user/userEditDetail',
    component: lazy(() => import('../pages/user/userEditDetail')),
    breadcrumb: [
      { title: '用户管理' },
      { title: '用户列表' ,to:"/user/userList" },
      { title: '用户编辑详情' }
    ]
  },

  //文章管理

  //活动列表
  {
    path: '/article/activity/activityEdit',
    component: lazy(() => import('../pages/article/activity/activityEdit')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '活动列表' ,to:"/article/activity/activityList"},
      { title: '活动编辑' }
    ]
  },
  {
    path: '/article/activity/activityList',
    component: lazy(() => import('../pages/article/activity/activityList')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '活动列表' }
    ]
  },
  {
    path: '/article/activity/activityRecycled',
    component: lazy(() => import('../pages/article/activity/activityRecycled')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '活动列表' ,to:"/article/activity/activityList" },
      { title: '活动回收站' }
    ]
  },
  {
    path: '/article/activity/activityRegistration',
    component: lazy(() => import('../pages/article/activity/activityRegistration')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '活动列表' ,to:"/article/activity/activityList" },
      { title: '活动报名信息' }
    ]
  },

  //轮播图管理
  {
    path: '/article/slideShow/slideShowEdit',
    component: lazy(() => import('../pages/article/slideShow/slideShowEdit')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '轮播图管理' ,to:"/article/slideShow/slideShowList" },
      { title: '轮播图编辑' }
    ]
  },
  {
    path: '/article/slideShow/slideShowList',
    component: lazy(() => import('../pages/article/slideShow/slideShowList')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '轮播图管理' }
    ]
  },
  {
    path: '/article/slideShow/slideShowRecycled',
    component: lazy(() => import('../pages/article/slideShow/slideShowRecycled')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '轮播图管理' ,to:"/article/slideShow/slideShowList" },
      { title: '轮播图回收站' }
    ]
  },

  //课程管理

  {
    path: '/article/course/courseEdit',
    component: lazy(() => import('../pages/article/course/courseEdit')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '课程管理' ,to:"/article/course/courseList" },
      { title: '课程编辑' }
    ]
  },
  {
    path: '/article/course/courseList',
    component: lazy(() => import('../pages/article/course/courseList')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '课程管理' }
    ]
  },
  {
    path: '/article/course/courseRecycled',
    component: lazy(() => import('../pages/article/course/courseRecycled')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '课程管理',to:"/article/course/courseList" },
      { title: '课程回收站' }
    ]
  },


  //教育头条管理

  {
    path: '/article/education/educationEdit',
    component: lazy(() => import('../pages/article/education/educationEdit')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '教育头条' ,to:"/article/education/educationList"},
      { title: '教育头条编辑' }
    ]
  },
  {
    path: '/article/education/educationList',
    component: lazy(() => import('../pages/article/education/educationList')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '教育头条' }
    ]
  },
  {
    path: '/article/education/educationRecycled',
    component: lazy(() => import('../pages/article/education/educationRecycled')),
    breadcrumb: [
      { title: '文章管理' },
      { title: '教育头条' ,to:"/article/education/educationList" },
      { title: '教育头条回收站' }
    ]
  },

 //明星教师管理 StarProfessors

 
 {
  path: '/article/starProfessors/starProfessorsEdit',
  component: lazy(() => import('../pages/article/starProfessors/starProfessorsEdit')),
  breadcrumb: [
    { title: '文章管理' },
    { title: '明星教师' ,to:"/article/starProfessors/starProfessorsList" },
    { title: '明星教师编辑' }
  ]
},
{
  path: '/article/starProfessors/starProfessorsList',
  component: lazy(() => import('../pages/article/starProfessors/starProfessorsList')),
  breadcrumb: [
    { title: '文章管理' },
    { title: '明星教师' }
  ]
},
{
  path: '/article/starProfessors/starProfessorsRecycled',
  component: lazy(() => import('../pages/article/starProfessors/starProfessorsRecycled')),
  breadcrumb: [
    { title: '文章管理' },
    { title: '明星教师',to:"/article/starProfessors/starProfessorsList" },
    { title: '明星教师回收站' }
  ]
},

//设置

{
  path: '/setting/generalSetting',
  component: lazy(() => import('../pages/setting/generalSetting')),
  breadcrumb: [
    { title: '设置' },
    { title: '通用设置' }
  ]
},
{
  path: '/setting/aboutUs',
  component: lazy(() => import('../pages/setting/aboutUs')),
  breadcrumb: [
    { title: '设置' },
    { title: '关于我们' }
  ]
},
{
  path: '/setting/uLog',
  component: lazy(() => import('../pages/setting/uLog')),
  breadcrumb: [
    { title: '设置' },
    { title: '操作日志' }
  ]
},
{
  path: '/setting/character/characterEdit',
  component: lazy(() => import('../pages/setting/character/characterEdit')),
  breadcrumb: [
    { title: '设置' },
    { title: '角色管理' ,to:"/setting/character/characterList"},
    { title: '角色编辑' }
  ]
},
{
  path: '/setting/character/characterList',
  component: lazy(() => import('../pages/setting/character/characterList')),
  breadcrumb: [
    { title: '设置' },
    { title: '角色管理' }
  ]
},

{
  path: '/setting/staff/staffEdit',
  component: lazy(() => import('../pages/setting/staff/staffEdit')),
  breadcrumb: [
    { title: '设置' },
    { title: '员工管理',to:"/setting/staff/staffList" },
    { title: '员工编辑' }
  ]
},
{
  path: '/setting/staff/staffList',
  component: lazy(() => import('../pages/setting/staff/staffList')),
  breadcrumb: [
    { title: '设置' },
    { title: '员工管理' }
  ]
},




  //错误页面
  {
    path: '/error',
    component: lazy(() => import('../pages/common/error'))
  },
  // 没有权限的页面
  {
    path: '/forbidden',
    component: lazy(() => import('../pages/common/forbidden'))
  },
  // 路径错误
  {
    path: '/not-match',
    component: lazy(() => import('../pages/common/not-match'))
  },
  {
    path: '**',
    render: () => <Redirect to="/not-match" />
  }
]


export default routes;