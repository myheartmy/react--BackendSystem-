// 管理接口
enum API{
  /*
    登录接口
    参数： username  password
  */
  LOGIN_API = '/manager/api/login',

  //首页api

  GET_HOME_API = "/api/home/data",

  //员工管理
  GET_MANAGER_WORKER_FIND_API = "/manager/api/worker/find",

  //员工更新
  //  method: POST
  //  params: {
  //    content:{ // 更新的内容
  //     // 一定要包含 id: string 这个字段
  //   }
  //  }
  POST_MANAGER_WORKER_UPDATE_API= "/manager/api/worker/update",
   
  // 员工新增：/manager/api/worker/add
  // method:POST
  // params: {
  //  content:{ //更新内容
  //   }
  // }`
  POST_MANAGER_WORKER_ADD_API = "/manager/api/worker/add",
  

  // 删除 api ： /manager/api/worker/remove
  // method: GET
  // params: {
  //   id: string[] // id数组，可删除多条
  // }
  POST_MANAGER_WORKER_REMOVE_API = "/manager/api/worker/remove",


  // 删除 api ： /manager/api/worker/remove
  // method: GET
  // params: {
  //   id: string[] // id数组，可删除多条
  // }


  GET_MANAGER_WORKER_REMOVE_API = "/manager/api/worker/remove",


  // 【用户管理 API 】
  // 查询 api ： /manager/api/user/find
  //  method: GET
  //  params: {
  //  page:number, // 第几页
  //  limit: number // 返回数据的条数
  //  name: string, // 只能模糊查询 name
  //  minTime: number, // 开始时间 时间统一用时间戳
  //  maxTime: number // 结束时间
  //  }
  GET_MANAGER_USER_FIND_API = "/manager/api/user/find",


   
  // 详情：api: /manager/api/user/detail
  //  method:POST
  //  params: {
  //     userId // 用户的 id
  //  }

  POST_MANAGER_USER_DETAIL_API = "/manager/api/user/detail",
   
  //  删除 api ： /manager/api/user/remove
  //  method: GET
  //  params: {
  //  id: string[] //id数组，可删除多条
  //  }
  GET_MANAGER_USER_REMOVE_API = "/manager/api/user/remove",
   
  //  更新/修改： /manager/api/user/update
  //  method: POST
  //  params: {
  //  content:{ // 更新的内容
  //  // 一定要包含 id: string 这个字段
  //  }
  //  }
 POST_MANAGER_USER_UPDATE_API = "/manager/api/user/update",
   
  //  新增：/manager/api/user/add
  //  method:POST
  //  params: {
  //  content:{ //更新内容
  //  }
  //  }`

  POST_MANAGER_USER_ADD_API = "/manager/api/user/add",


  
}



export default API;






