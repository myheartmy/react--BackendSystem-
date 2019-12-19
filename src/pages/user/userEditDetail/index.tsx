import React, { useCallback, useState } from 'react'
import { Link } from "react-router-dom"
import { Descriptions, Table, message, Modal, Input,Popconfirm } from "antd"
import "./style.scss"

const { TextArea } = Input;

const UserEditDetail: React.FC<{}> = function UserEditDetail() {

  const columns = [
    {
      title: '消息金额',
      dataIndex: 'ID',
    },
    {
      title: '邀请好友',
      dataIndex: 'nickName',
    },
    {
      title: '优惠券数量',
      dataIndex: '22',
      key: 'x',
      render: () => <span></span>,
    },
    {
      title: '积分',
      dataIndex: 'phone',
    },
    {
      title: '参加活动次数',
      dataIndex: 'courseName',
    },
    {
      title: '订单数量',
      dataIndex: 'num',
    },
    {
      title: '上次登录时间',
      dataIndex: 'time',
    },

  ];
  const data: any = [{
    ID: 1,
    key: 1,
    nickName: 1,
    phone: 1577947589,
    courseName: 32,
    time: new Date().getTime()
  }];



  const columns1 = [
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
      render: () => <span className="handle"><Link to="/order/orderDetails"> 查看订单 </Link><span onClick={showModal}> 删除订单 </span></span>,
    },
  ];

  const data1: any = [];
  for (let j = 0; j < 10; j++) {
    data1.push({
      ID: j,
      key: j,
      nickName: 1,
      phone: 1577947589,
      courseName: 32,
      courseId: `no. ${j}`,
      money: 2000,
      status: "已完成",
      time: new Date().getTime()
    });
  }

  const columns2 = [
    {
      title: '活动名称',
      dataIndex: 'ID',
    },
    {
      title: '订单编号',
      dataIndex: 'nickName',
    },
    {
      title: '孩子姓名',
      dataIndex: 'phone',
    },
    {
      title: '联系电话',
      dataIndex: 'courseName',
    },
    {
      title: '年龄',
      dataIndex: 'courseId',
    },
    {
      title: '报名费',
      dataIndex: 'money',
    },
    {
      title: '订单状态',
      dataIndex: 'status',
    },
    {
      title: '支付时间',
      dataIndex: 'time',
    },
    {
      title: '支付方式',
      dataIndex: 'pay',
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: () => <span className="handle"><Link to="/order/orderDetails"> 查看订单 </Link><Popconfirm placement="left" title="取消后报名费将会退回该用户账户，确定取消？" onConfirm={confirm} okText="确定" cancelText="取消">
      <span className="delete"> 取消报名 </span>
      </Popconfirm></span>,
    },
  ];
  const confirm = useCallback(()=>{
    message.info('点击了确定');
  },[]);

  const data2: any = [];
  for (let j = 0; j < 5; j++) {
    data2.push({
      ID: j,
      key: j,
      nickName: 1,
      phone: 1577947589,
      courseName: 32,
      courseId: `no. ${j}`,
      money: 2000,
      status: "已完成",
      pay:"微信支付",
      time: new Date().getTime()
    });
  }


  // 对话框控制
  const [showModelTitle, setShowModelTitle] = useState("取消订单");
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



  return (
    <div id="userEditDetail">

      <div className="back">
        <Descriptions title="基础信息 :" >
          <Descriptions.Item label="订单编号">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="订单状态">1810000000</Descriptions.Item>
          <Descriptions.Item label="下单时间">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="付款时间">empty</Descriptions.Item>
          <Descriptions.Item label="支付方式">empty</Descriptions.Item>
          <Descriptions.Item label="赠送积分">20</Descriptions.Item>
        </Descriptions>
      </div>


      {/* 统计信息 */}
      <div className="infoTable">
        <h2>统计信息 :</h2>
        <Table columns={columns} bordered dataSource={data} pagination={{ hideOnSinglePage: true }} />
      </div>

      {/* 课程购买记录 */}
      <div className="infoTable">
        <h2>课程购买记录 :</h2>
        <Table columns={columns1} dataSource={data1} pagination={{ hideOnSinglePage: true }} />
      </div>

      {/* 活动参加记录 */}
      <div className="infoTable">
        <h2>活动参加记录 :</h2>
        <Table columns={columns2} dataSource={data2} pagination={{ hideOnSinglePage: true }} />
      </div>


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

export default UserEditDetail;