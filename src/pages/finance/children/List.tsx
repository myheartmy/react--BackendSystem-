import React from 'react'
import {  Table,Icon} from 'antd';
import './style.scss'



const ListTable: React.FC<{}> = function ListTable() {

  const columns = [
    {
      title: '订单编号',
      dataIndex: 'ID',
    },
    {
      title: '订单分类',
      dataIndex: 'nickName',
    },
    {
      title: '标题',
      dataIndex: 'phone',
    },
    {
      title: '订单金额',
      dataIndex: 'courseName',
    },
    {
      title: '订单状态',
      dataIndex: 'courseId',
    },
    {
      title: '下单时间',
      dataIndex: 'money',
    }
  ];

  const data: any = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      ID: i,
      key: i,
      nickName: `${i}`,
      phone: 1577947589,
      courseName: 32,
      courseId: `no. ${i}`,
      money: 2000,
      status: "已完成",
      time: new Date().getTime()
    });
  }

  return (
    <div id="ListTable">
      <div className="title">
            <Icon type="menu" />
            <span>流水列表</span>
          </div>
      <Table  columns={columns} dataSource={data} />
    </div>
  )
}


export default ListTable;











