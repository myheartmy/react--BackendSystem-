import {Action} from 'redux'
import {Map} from 'immutable'

const initialState = Map({
  isLogin: true,
  userInfo: Map({
    role: 'admin'
  })
});

/*     service
          统计        商品          分类      订单          设置
管理员     true        true        true       true          true
客服      false       true          true      true         false


          订单分析   用户分析          商品         商品管理       编辑商品             分类      订单          设置
管理员     true              true        true       true          true
客服      false               true          true      true         false

*/


export default (state = initialState, action: Action)=>{

  return state;
}