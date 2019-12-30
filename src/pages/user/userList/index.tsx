
import React, { useCallback,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {requestUserData} from "../../../store/models/user";
import { Icon, Input, DatePicker, Button, Tabs } from "antd"
import UserListTable from "./children/userList"
import {useDispatch,useSelector} from "react-redux"
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/zh_CN';
import "./style.scss"
import Item from 'antd/lib/list/Item';

const { TabPane } = Tabs;

const { RangePicker } = DatePicker;


const disabledDate = (current: moment.Moment | null) => {
  if (!current) {
    return false;
  } else {
    return current > moment().endOf('day');;
  }
}

const UserList: React.FC<{}> = function UserList() {

  const dispatch = useDispatch();
  const userStatus = useSelector(state=>(state as any).getIn(['user']));
  useEffect(()=>{
    dispatch(requestUserData());
  }, [dispatch]);

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
            <RangePicker onChange={onChange} locale={locale} disabledDate={disabledDate} />
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

        {/* 用户列表 */}
        <UserListTable  data={userStatus}/>

      </div>

    </div>
  )

}

export default UserList;