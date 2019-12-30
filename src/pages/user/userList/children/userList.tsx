import React, {useCallback, useState} from 'react'
import {  message, Table,Switch ,Popconfirm } from 'antd';
import { Link } from 'react-router-dom'
import {requestUserData} from "../../../../store/models/user";
import { useDispatch, useSelector } from 'react-redux'
import './style.scss'




const UserListTable: React.FC<{data:any}> = function UserListTable({data:userDataList}) {
  const dataList = userDataList.toJS().user.data;
  const count =  userDataList.toJS().user.count;
  console.log(count);
  console.log(dataList)
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const dispatch = useDispatch();
  


  const confirm = useCallback(()=>{
    message.info('点击了确定');
  },[]);

  const onChange =useCallback((checked)=>{ message.info(`switch to ${checked}`)},[])

  const pageChange = useCallback((page, pageSize)=>{ 
    console.log(page,pageSize);
    dispatch(requestUserData(page));
    
  },[])
  const columns = [
    {
      title: '用户ID',
      dataIndex: 'id',
      key:"id"
    },
    {
      title: '微信昵称',
      dataIndex: 'wechat',
      key:"wechat"
    },
    {
      title: '会员手机',
      dataIndex: 'vipPhone',
      key: 'vipPhone',
    },
    {
      title: '注册时间',
      dataIndex: 'registerTime',
      key:'registerTime',
    },
    {
      title: '会员等级',
      dataIndex: 'vipGrade',
      key: 'vipGrade',
    },
    {
      title: '上次消费时间',
      dataIndex: 'lastConsume',
      key: 'lastConsume',
    },
    {
      title: '禁用账户',
      render:()=><Switch defaultChecked onChange={onChange} />,
      dataIndex: 'isForbidden',
      key: 'isForbidden',
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: () => <span className="handle"><Link to="/user/userEditDetail">编辑</Link><Popconfirm placement="left" title="删除后无法恢复,确定删除?" onConfirm={confirm} okText="确定" cancelText="取消">
      <span className="delete">删除</span>
      </Popconfirm></span>
    },
  ];



  const onSelectChange=useCallback((selectedRowKey)=>{
    setSelectedRowKeys(selectedRowKey);
  },[selectedRowKeys])

    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    return (
      <div id="orderListTable">
        <Table rowSelection={rowSelection} pagination={{total:count,onChange:pageChange}} columns={columns} dataSource={dataList} />
      </div>
    )
}


export default UserListTable;




