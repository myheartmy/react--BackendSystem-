import React, {useCallback, useState} from 'react'
import {  message, Table,Switch ,Popconfirm } from 'antd';
import { Link } from 'react-router-dom'
import './style.scss'


const data:any = [];


for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    ID: `${i}`,
    nickName: 32,
    phone: `no. ${i}`,
    registerTime:new Date().getTime(),
    level:`${i}`,
    forbidden:false,
    time:new Date().getTime()

  });
}

const UserListTable: React.FC<{}> = function UserListTable() {

  const [selectedRowKeys,setSelectedRowKeys] = useState([]);

  const confirm = useCallback(()=>{
    message.info('点击了确定');
  },[]);

  const onChange =useCallback((checked)=>{ message.info(`switch to ${checked}`)},[])

  const columns = [
    {
      title: '优惠券标题',
      dataIndex: 'ID',
    },
    {
      title: '金额(元)',
      dataIndex: 'nickName',
    },
    {
      title: '获得方式',
      dataIndex: 'phone',
    },
    {
      title: '状态',
      dataIndex: 'registerTime',
    },
    {
      title: '截止时间',
      dataIndex: 'level',
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: () => <span className="handle"><Link to="/Gutschein/GutscheinEdit">编辑</Link><Popconfirm placement="left" title="删除后无法恢复,确定删除?" onConfirm={confirm} okText="确定" cancelText="取消">
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
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    )
}


export default UserListTable;




