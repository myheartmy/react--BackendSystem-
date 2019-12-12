interface SiderItemInterface{
  id: string,
  title: string,
  path: string
}
interface SiderConfigInterface {
  id: string,
  root: string,
  icon: string,
  children: SiderItemInterface[]
}

const SiderConfig: SiderConfigInterface[] = [
  {
    id: 'article',
    root: '文章管理',
    icon: 'file-text',
    children: [
      {
        id: 'article-slideShow',
        title: '轮播图管理',
        path: '/article/slideShow/slideShowList'
      },
      {
        id: 'article-activity',
        title: '活动列表',
        path: '/article/activity/activityList'
      },
      {
        id: 'article-education',
        title: '教育头条',
        path: '/article/education/educationList'
      },
      {
        id: 'article-starProfessors',
        title: '明星教师',
        path: '/article/starProfessors/starProfessorsList'
      },
      {
        id: 'article-course',
        title: '课程管理',
        path: '/article/course/courseList'
      },
    ]
  },
  {
    id: 'order',
    root: '订单管理',
    icon: 'shopping',
    children: [
      {
        id: 'order-orderList',
        title: '订单列表',
        path: '/order/orderList'
      }
    ]
  },
  {
    id: 'user',
    root: '用户管理',
    icon: 'idcard',
    children: [
      {
        id: 'user-userList',
        title: '用户列表',
        path: '/user/userList'
      }
    ]
  },
  {
    id: 'finance',
    root: '财务管理',
    icon: 'property-safety',
    children: [
      {
        id: 'finance',
        title: '财务列表',
        path: '/finance'
      }
    ]
  },
  {
    id: 'service',
    root: '客服系统',
    icon: 'phone',
    children: [
      {
        id: 'service-currentSession',
        title: '当前会话',
        path: '/service/currentSession'
      },
      {
        id: 'service-customerSevice',
        title: '客户中心',
        path: '/service/customerSevice'
      },
      {
        id: 'service-orderCenter',
        title: '工单中心',
        path: '/service/orderCenter'
      },
      {
        id: 'service-sessionStatistics',
        title: '会话统计',
        path: '/service/sessionStatistics'
      }
    ]
  },

  {
    id: 'setting',
    root: '设置',
    icon: 'setting',
    children: [
      {
        id: 'setting-generalSetting',
        title: '通用设置',
        path: '/setting/generalSetting'
      },
      {
        id: 'setting-aboutUs',
        title: '关于我们',
        path: '/setting/aboutUs'
      },
      {
        id: 'setting-staff-staffList',
        title: '员工管理',
        path: '/setting/staff/staffList'
      },
      {
        id: 'setting-character-characterList',
        title: '角色管理',
        path: '/setting/character/characterList'
      },
      {
        id: 'setting-uLog',
        title: '操作日志',
        path: '/setting/uLog'
      }
    ]
  }
]

export default SiderConfig;
