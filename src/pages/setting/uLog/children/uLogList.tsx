import React from 'react'
import {  Table,Icon} from 'antd';
import './style.scss'



const ULogList: React.FC<{}> = function ULogList() {

  const columns = [
    {
      title: '操作人',
      dataIndex: 'ID',
    },
    {
      title: '操作模块',
      dataIndex: 'nickName',
    },
    {
      title: '操作时间',
      dataIndex: 'phone',
    },
    {
      title: '操作内容',
      dataIndex: 'courseName',
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
    });
  }

  return (
    <div id="ULogList">
      <div className="title">
            <Icon type="menu" />
            <span>日志列表</span>
          </div>
      <Table  columns={columns} dataSource={data} />
    </div>
  )
}


export default ULogList;
