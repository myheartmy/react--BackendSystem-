import React, { useCallback, useState } from 'react'
import { message, Table, Switch, Popconfirm } from 'antd';
import { removeWorkerData, updateWorkerData, updateStateWorker } from "../../../../../store/models/setting"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.scss'



const CharacterListTable: React.FC<{ data: any }> = function CharacterListTable({ data: dataArr }) {
  const dataList = dataArr.toJS().worker.data;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const dispatch = useDispatch();
  // 确认删除
  const confirm = useCallback((record, ev) => {
    dispatch(removeWorkerData({ id: record.id }));

  }, []);


  //修改用户状态 
  const onChange = useCallback((val, select) => {
    let newSelect = {
      ...val,
      isForbidden: select
    };
    dispatch(updateWorkerData(newSelect));
    dispatch(updateStateWorker("updateStateWorker", newSelect))
    console.log(newSelect);
    // dataArr.setIn(["add","data",checked,'isForbidden'], index);
  }, [dispatch])

  const columns = [
    {
      title: '工号',
      dataIndex: 'id',
      key: "id"
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: "name"
    },
    {
      title: '会员手机',
      dataIndex: 'vipPhone',
      key: "vipPhone"
    },
    {
      title: '角色',
      dataIndex: 'roles',
      key: "roles"
    },
    {
      title: '添加时间',
      dataIndex: 'addTime',
      key: "addTime"
    },
    {
      title: '禁用账户',
      render: (text: any, record: any, index: any) => <Switch checked={text} onChange={onChange.bind("val", record)} />,
      key: "isForbidden",
      dataIndex: 'isForbidden',
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (text: any, record: any, index: any) => <span className="handle"><Link to={{ pathname: '/setting/staff/staffEdit', state: { index, type: "edit" } }}>编辑</Link><Popconfirm placement="left" title="删除后无法恢复,确定删除?" onConfirm={confirm.bind("", record)} okText="确定" cancelText="取消">
        <span className="delete">删除</span>
      </Popconfirm></span>
    },
  ];

  const onSelectChange = useCallback((selectedRowKey) => {
    setSelectedRowKeys(selectedRowKey);

  }, [selectedRowKeys])

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div id="orderListTable">
      <Table rowSelection={rowSelection} columns={columns} dataSource={dataList} />
    </div>
  )
}


export default CharacterListTable;




