import immutable, { fromJS } from 'immutable'
import API from '../../ajax/api'
import ajax from '../../ajax'
import { Dispatch } from 'redux';
import { message } from "antd";


// -------------------------------------------------------------------------------------------------------
// 定义三种枚举状态

// 获取初始界面数据
enum HomeDataType {
  load = 'worker_category_load',
  success = 'worker_category_success',
  fail = 'worker_category_fail'
}

//更新
enum updateDataType {
  load = 'worker_update_load',
  success = 'worker_update_success',
  fail = 'worker_update_fail'
}

//新增
enum addDataType {
  load = 'worker_add_load',
  success = 'worker_add_success',
  fail = 'worker_add_fail'
}

//删除
enum removeDataType {
  load = 'worker_remove_load',
  success = 'worker_remove_success',
  fail = 'worker_remove_fail'
}

// ----------------------------------------------------------------------------------------------------------------
// 同步action

// 请求列表数据
const findWorker = (type: HomeDataType, value?: any) => ({
  type,
  value
})

// 编辑页面数据
const editWorker = (type: updateDataType, value?: any) => ({
  type,
  value
})

//员工新增
const addWorker = (type: addDataType, value?: any) => ({
  type,
  value
})

// 员工删除
const removeWorker = (type: removeDataType, value?: any) => ({
  type,
  value
})


// 仓库删除数据
const removeStateWorker = (type: 'removeStateWorker', value?: any) => ({
  type,
  value
})

// 更新仓库值
export const updateStateWorker = (type: 'updateStateWorker', value?: any) => ({
  type,
  value
})



// -----------------------------------------------------------------------------------------------------
//Action类型

//设置页面员工管理列表
type Action = ReturnType<typeof findWorker> | ReturnType<typeof editWorker> | ReturnType<typeof addWorker> | ReturnType<typeof removeWorker> | ReturnType<typeof removeStateWorker> | ReturnType<typeof updateStateWorker>;

// 异步action
export const requestWorkerData = () => (dispatch: Dispatch) => {
  //加载中
  dispatch(findWorker(HomeDataType.load));
  //请求数据
  ajax.get(API.GET_MANAGER_WORKER_FIND_API)
    .then(result => {
      //请求成功
      console.log(result.data.data);
      dispatch(findWorker(HomeDataType.success, result.data.data));
    })
    .catch(error => {
      //请求失败
      dispatch(findWorker(HomeDataType.fail));
    })
}


// 员工管理编辑
export const updateWorkerData = (data: any) => (dispatch: Dispatch) => {
  //加载中
  // dispatch(editWorker(updateDataType.load));
  console.log("加载中");
  //请求数据
  ajax.post(API.POST_MANAGER_WORKER_UPDATE_API, data)
    .then(result => {
      //请求成功
      message.success('修改成功', 0.5);
      dispatch(editWorker(updateDataType.success, result.data));
    })
    .catch(error => {
      console.log("失败了")
      //请求失败
      // dispatch(editWorker(updateDataType.fail));
    })
}


// 员工新增
export const addWorkerData = (data: any) => (dispatch: Dispatch) => {
  //加载中
  // dispatch(editWorker(updateDataType.load));
  console.log("加载中");
  //请求数据
  ajax.post(API.POST_MANAGER_WORKER_ADD_API, data)
    .then(result => {
      //请求成功
      console.log(result);
      message.success('新增成功', 0.5);
      dispatch(addWorker(addDataType.success, result.data));
    })
    .catch(error => {
      console.log("失败了")
      //请求失败
      // dispatch(editWorker(updateDataType.fail));
    })
}


// 删除员工
export const removeWorkerData = (data: any) => (dispatch: Dispatch) => {
  //加载中
  // dispatch(editWorker(updateDataType.load));
  //请求数据
  ajax.get(API.GET_MANAGER_WORKER_REMOVE_API, data)
    .then(result => {
      //请求成功
      dispatch(removeWorker(removeDataType.success, result.data));
      dispatch(removeStateWorker("removeStateWorker", data.id));
      message.success('删除成功', 0.5);
    })
    .catch(error => {
      console.log("失败了")
      //请求失败
      // dispatch(editWorker(updateDataType.fail));
    })
}


// --------------------------------------------------------------------------------------------------------
// state
const initialState = {
  worker: {
    status: 'waiting',
    data: null,
    editVal: null
  }
}


// ---------------------------------------------------------------------------------------------------------
//reducer
export default (state = immutable.fromJS(initialState), action: Action) => {
  switch (action.type) {
    case HomeDataType.load:
      return state.setIn(['worker', 'status'], 'loading');
    case HomeDataType.success:
      const newState = state.setIn(['worker', 'status'], 'success');
      return newState.setIn(['worker', 'data'], immutable.fromJS(action.value));
    case HomeDataType.fail:
      return state.setIn(['worker', 'status'], 'fail');
    case updateDataType.success:
      return state.setIn(['worker', 'editVal'], immutable.fromJS(action.value));
    case addDataType.success:
      return state.setIn(['worker', 'editVal'], immutable.fromJS(action.value));
    case 'removeStateWorker':
      const newStateWorker = state.getIn(['worker', 'data']).filter((item: any) => item.get('id') !== action.value);
      return state.setIn(['worker', 'data'], newStateWorker);
    case 'updateStateWorker':
     const newSelectData = state.getIn(['worker', 'data']).map((item: any,index:number) =>{
        if( item.get('_id') === action.value._id){
          return immutable.fromJS(action.value);
        }
        return item;
      })
      return state.setIn(['worker', 'data'], newSelectData);
    default:
      return state;
  }
}