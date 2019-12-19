import React, { useCallback } from 'react'
import { Icon, Input, DatePicker, Button, Tabs } from "antd"
import OrderListTable from "./children/orderList"
import moment from 'moment';
import "./style.scss"

const { TabPane } = Tabs;

const { RangePicker } = DatePicker;


const disabledDate = (current: moment.Moment | null) => {
  if (!current) {
    return false;
  } else {
    return current > moment().endOf('day');;
  }
}

const TabList=[
  {tab:"全部订单",key:'0'},
  {tab:"代付款",key:'1'},
  {tab:"学习中",key:'2'},
  {tab:"已完成",key:'3'},
  {tab:"已关闭",key:'4'}
]

const OrderList: React.FC<{}> = function OrderList() {



  const onChange = useCallback((dates: any, dateStrings: [string, string]) => {
    console.log(dates, dateStrings);
  }, []);

  const callback = useCallback((key) => {
    console.log(key);
  }, [])


  return (
    <div id="OrderList">
      {/* 筛选 */}
      <div className="search">
        <div className="title">
          <Icon type="appstore" />
          <span>筛选</span>
        </div>
        {/* 条件 */}
        <div className="type">
          <div className="input">
            <span>输入搜索 : </span>
            <Input placeholder="请输入昵称或手机号..." />
          </div>
          {/* 日期选择器 */}
          <div className="selectData">
            <span>提交时间 : </span>
            <RangePicker onChange={onChange}  disabledDate={disabledDate} />
          </div>
          <Button><Icon type="filter" theme="filled" />筛选</Button>
          <div className="clear">清空筛选条件</div>
        </div>
      </div>

      {/* 订单列表 */}
      <div className="order-list">

        <div className="title">
          <Icon type="menu" />
          <span>订单列表</span>
        </div>

        {/* 订单列表 */}
        <Tabs defaultActiveKey="0" onChange={callback}>
        {TabList.map((item,index)=>(
           <TabPane key={item.key} tab={item.tab} >
               <OrderListTable />
            </TabPane>
        ))
          }
          
        </Tabs>
      </div>

    </div>
  )
}

export default OrderList;









