import React, { useCallback, useState } from 'react'
import { Table, Modal, Input,message } from 'antd';
import { Link } from 'react-router-dom'
import './style.scss'
const { TextArea } = Input;



const OrderListTable: React.FC<{}> = function OrderListTable() {

  const columns = [
    {
      title: '订单编号',
      dataIndex: 'ID',
    },
    {
      title: '用户微信昵称',
      dataIndex: 'nickName',
    },
    {
      title: '用户手机号码',
      dataIndex: 'phone',
    },
    {
      title: '课程名称',
      dataIndex: 'courseName',
    },
    {
      title: '课程编号',
      dataIndex: 'courseId',
    },
    {
      title: '订单金额(元)',
      dataIndex: 'money',
    },
    {
      title: '订单状态',
      dataIndex: 'status',
    },
    {
      title: '提交时间',
      dataIndex: 'time',
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: () => <span className="handle"><Link to="/order/orderDetails"> 查看订单 </Link><span onClick={showModal}> 取消订单 </span><br /><span onClick={showModal}> 结束课程 </span><span onClick={showModal}> 删除订单 </span></span>,
    },
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

  // 对话框控制
  const [showModelTitle,setShowModelTitle] = useState("取消订单");
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = useCallback((ev) => {
    setShowModelTitle(ev.target.innerText);
    setVisible(true);
  }, []);
  const handleOk = useCallback(() => {
    setConfirmLoading(true);
    message.success('操作成功', 0.5);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  }, []);
  const handleCancel = useCallback(() => {
    console.log('Clicked cancel button');
    setVisible(false);
  }, []);

  // 列表控制
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = useCallback((selectedRowKey) => {
    setSelectedRowKeys(selectedRowKey);
  }, [selectedRowKeys])
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };


  return (
    <div id="orderListTable">
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <div>
        <Modal
          title={showModelTitle}
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <div className="showModel">
            <span>操作备注</span>
            <TextArea rows={4} />
          </div>
        </Modal>
      </div>
    </div>
  )
}


export default OrderListTable;











