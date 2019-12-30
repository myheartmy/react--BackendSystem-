import immutable, { fromJS } from 'immutable'
import API from '../../ajax/api'
import ajax from '../../ajax'
import { Dispatch } from 'redux';
import { message } from "antd";
import moment from "moment";
import Item from 'antd/lib/list/Item';


// -------------------------------------------------------------------------------------------------------------------------

// 定义三种枚举状态

// 获取初始界面数据
enum UserDataType {
  load = 'user_category_load',
  success = 'user_category_success',
  fail = 'user_category_fail'
}


//更新
enum updateDataType {
  load = 'user_update_load',
  success = 'user_update_success',
  fail = 'user_update_fail'
}

//新增
enum addDataType {
  load = 'user_add_load',
  success = 'user_add_success',
  fail = 'user_add_fail'
}


//删除
enum removeDataType {
  load = 'user_remove_load',
  success = 'user_remove_success',
  fail = 'user_remove_fail'
}


// -----------------------------------------------------------------------------------------------------------------

// 同步action

// 请求列表数据
const findUser = (type: UserDataType, value?: any) => ({
  type,
  value
})


// 编辑页面数据
const editUser = (type: updateDataType, value?: any) => ({
  type,
  value
})

//员工新增
const addUser = (type: addDataType, value?: any) => ({
  type,
  value
})

// 员工删除
const removeUser = (type: removeDataType, value?: any) => ({
  type,
  value
})


// 仓库删除数据
const removeStateUser = (type: 'removeStateUser', value?: any) => ({
  type,
  value
})


// 更新仓库值
export const updateStateUser = (type: 'updateStateUser', value?: any) => ({
  type,
  value
})



// -----------------------------------------------------------------------------------------------------------------
//Action类型

//设置页面用户管理列表
type Action = ReturnType<typeof findUser> | ReturnType<typeof editUser> | ReturnType<typeof addUser> | ReturnType<typeof removeUser> | ReturnType<typeof removeStateUser> | ReturnType<typeof updateStateUser>;

// 异步action
export const requestUserData = (page?:any) => (dispatch: Dispatch) => {
  //加载中
  dispatch(findUser(UserDataType.load));
  //请求数据
  console.log(page,"user列表");
  ajax.get(API.GET_MANAGER_USER_FIND_API,{page})
    .then(result => {

    result.data.data.forEach((item: any,index:number) =>{
        item.registerTime =moment(item.registerTime).format('YYYY-MM-DD HH:mm');
        item.lastConsume =moment(Number(item.lastConsume)).format('YYYY-MM-DD HH:mm');
        return  item;
      })
      //请求成功
      dispatch(findUser(UserDataType.success, {data:result.data.data,count:result.data.count}));
    })
    .catch(error => {
      //请求失败
      dispatch(findUser(UserDataType.fail));
    })
}


// 员工管理编辑
export const updateUserData = (data: any) => (dispatch: Dispatch) => {
  //加载中
  // dispatch(editUser(updateDataType.load));
  console.log("加载中");
  //请求数据
  ajax.post(API.POST_MANAGER_USER_UPDATE_API, data)
    .then(result => {
      //请求成功
      message.success('修改成功', 0.5);
      dispatch(editUser(updateDataType.success, result.data));
    })
    .catch(error => {
      console.log("失败了")
      //请求失败
      // dispatch(editUser(updateDataType.fail));
    })
}


// 员工新增
export const addUserData = (data: any) => (dispatch: Dispatch) => {
  //加载中
  // dispatch(editUser(updateDataType.load));
  console.log("加载中");
  //请求数据
  ajax.post(API.POST_MANAGER_USER_ADD_API, data)
    .then(result => {
      //请求成功
      console.log(result);
      message.success('新增成功', 0.5);
      dispatch(addUser(addDataType.success, result.data));
    })
    .catch(error => {
      console.log("失败了")
      //请求失败
      // dispatch(editUser(updateDataType.fail));
    })
}


// 删除员工
export const removeUserData = (data: any) => (dispatch: Dispatch) => {
  //加载中
  // dispatch(editUser(updateDataType.load));
  //请求数据
  ajax.get(API.GET_MANAGER_USER_REMOVE_API, data)
    .then(result => {
      //请求成功
      console.log(data.id);

      dispatch(removeUser(removeDataType.success, result.data));
      dispatch(removeStateUser("removeStateUser", data.id));
      message.success('删除成功', 0.5);
    })
    .catch(error => {
      console.log("失败了")
      //请求失败
      // dispatch(editUser(updateDataType.fail));
    })
}


// -------------------------------------------------------------------------------------------------------------
// state
const initialState = {
  user: {
    status: 'waiting',
    data: null,
    editVal: null,
    count:null
  }
}


// -------------------------------------------------------------------------------------------------------------
//reducer
export default (state = immutable.fromJS(initialState), action: Action) => {
  switch (action.type) {
    case UserDataType.load:
      return state.setIn(['user', 'status'], 'loading');
    case UserDataType.success:
        const {data,count} = action.value
      let newState = state.setIn(['user', 'status'], 'success');
      let newState1 = newState.setIn(['user', 'count'], count);
      return newState1.setIn(['user', 'data'], immutable.fromJS(data));
    case UserDataType.fail:
      return state.setIn(['user', 'status'], 'fail');
    case updateDataType.success:
      return state.setIn(['user', 'editVal'], immutable.fromJS(action.value));
    case addDataType.success:
      return state.setIn(['user', 'editVal'], immutable.fromJS(action.value));
    case 'removeStateUser':
      const newStateUser = state.getIn(['user', 'data']).filter((item: any) => item.get('id') !== action.value);
      return state.setIn(['user', 'data'], newStateUser);
    case 'updateStateUser':
     const newSelectData = state.getIn(['user', 'data']).map((item: any,index:number) =>{
        if( item.get('_id') === action.value._id){
          return immutable.fromJS(action.value);
        }
        return item;
      })
      return state.setIn(['user', 'data'], newSelectData);
    default:
      return state;
  }
}