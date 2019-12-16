import React from 'react'
import {Link} from 'react-router-dom'

const OrderList: React.FC<{}> = function OrderList(){

  return (
    <div>
      <h1>订单列表</h1>
      <Link to="/order/orderDetails">订单详情</Link>
    </div>
  )
}

export default OrderList;