import immutable from 'immutable'
import API from '../../ajax/api'
import ajax from '../../ajax'
import { Dispatch } from 'redux';



// 定义三种枚举状态
enum HomeDataType{
  load = 'add_category_load',
  success = 'add_category_success',
  fail = 'add_category_fail'
}


// 同步action
const addCategory = (type: HomeDataType, value?: any)=>({
  type,
  value
})




//Action类型
type Action = ReturnType<typeof addCategory>;

// 异步action
// 发送新增分类的事件
export const requestHomeData = (categoryName: number)=>(dispatch: Dispatch)=>{
  //加载中
  dispatch(addCategory(HomeDataType.load));
  //请求数据
  ajax.get(API.GET_HOME_API, {
    params: {
      time: categoryName
    }
  })
  .then(result=>{
    //请求成功
    dispatch(addCategory(HomeDataType.success));
  })
  .catch(error=>{
    //请求失败
    dispatch(addCategory(HomeDataType.fail));
  })
}



// state
const initialState = {
  add: {
    status: 'waiting',
    data:null
  }
}

//reducer
export default (state = immutable.fromJS(initialState), action: Action)=>{
  switch (action.type) {
    case HomeDataType.load:
      return state.setIn(['add', 'status'], 'loading');
    case HomeDataType.success:
      return state.setIn(['add', 'status'], 'success');
    case HomeDataType.fail:
      return state.setIn(['add', 'status'], 'fail');
    default:
      return state;
  }
}