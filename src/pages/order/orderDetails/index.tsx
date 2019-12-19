import React, { useCallback, useState } from 'react'
import { Button, Table, Modal, Input, message, Icon, Descriptions } from 'antd';

import "./style.scss"

const { TextArea } = Input;


const OrderDetails: React.FC<{}> = function OrderDetails() {

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


  const columns = [
    {
      title: '课程ID',
      dataIndex: 'ID',
    },
    {
      title: '课程名称',
      dataIndex: 'nickName',
    },
    {
      title: '列表图',
      dataIndex: '',
      key: 'x',
      render: () => <img className="detailsImg" src="http://www.axshare.cn/gsc/IVRNJU/d7/ce/6a/d7ce6a23d19f46a68fd85fab7b1243ed/images/课程管理/u999.png?token=854b676bdddedd7db44704fd37c15994c77657bd0539d7a3aeb089aff98ded4d" />,
    },
    {
      title: '课程上架',
      dataIndex: 'phone',
    },
    {
      title: '课程名称',
      dataIndex: 'courseName',
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
      title: '订单金额',
      dataIndex: 'ID',
    },
    {
      title: '优惠券',
      dataIndex: 'nickName',
    },
    {
      title: '积分优惠券',
      dataIndex: 'phone',
    },
    {
      title: '实付金额',
      dataIndex: 'courseName',
    }
  ];
  const data1: any = [{
    ID: 1,
    key: 1,
    nickName: 1,
    phone: 1577947589,
    courseName: 32,
    time: new Date().getTime()
  }];

  const columns2 = [
    {
      title: '操作人',
      dataIndex: 'ID',
    },
    {
      title: '操作时间',
      dataIndex: 'nickName',
    },
    {
      title: '操作内容',
      dataIndex: 'phone',
    },
    {
      title: '备注',
      dataIndex: 'courseName',
    }
  ];
  const data2: any = [{
    ID: 1,
    key: 1,
    nickName: 1,
    phone: 1577947589,
    courseName: 32,
    time: new Date().getTime()
  }];



  return (
    <div id="orderDetails">

      {/* 步骤条 */}
      <div className="status">
        <span className="active">提交订单</span>
        <span>支付订单</span>
        <span>学习课程</span>
        <span>课程结束</span>
        <span>完成评价</span>
      </div>

      {/* 状态操作 */}
      <div className="statusHandle">

        {/* 提交订单 */}
        <div className="submit">
          <div>
            <Icon type="exclamation-circle" theme="filled" />
            <span>订单状态：课程已拍下，等待买家付款</span>
          </div>
          <Button icon="undo" onClick={showModal}>
            取消订单
          </Button>
          <Button icon="highlight" onClick={showModal}>
            添加备注
          </Button>
        </div>

        {/* 学习中 */}
        <div className="learning">
          <div>
            <Icon type="pie-chart" />
            <span>订单状态：学习中</span>
          </div>
          <Button icon="undo" onClick={showModal}>
            取消订单
          </Button>
          <Button icon="poweroff" onClick={showModal}>
            结束课程
          </Button>
          <Button icon="highlight" onClick={showModal}>
            添加备注
          </Button>
        </div>

        {/* 完成 */}
        <div className="learning">
          <div>
            <Icon type="check-circle" />
            <span>订单状态：已完成</span>
          </div>
          <Button icon="highlight" onClick={showModal}>
            添加备注
          </Button>
        </div>

        {/* 完成评价 */}
        <div className="learning">
          <div>
            <Icon type="minus-circle" />
            <span>订单状态：已关闭</span>
          </div>
          <Button icon="close-circle" onClick={showModal}>
            删除订单
          </Button>
          <Button icon="highlight" onClick={showModal}>
            添加备注
          </Button>
        </div>
      </div>

      {/* 基础信息 */}
      <Descriptions title="基础信息 :" >
        <Descriptions.Item label="订单编号" span={2}>Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="订单状态" span={2}>1810000000</Descriptions.Item>
        <Descriptions.Item label="下单时间" span={2}>Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="付款时间" span={2}>empty</Descriptions.Item>
        <Descriptions.Item label="支付方式" span={2}>empty</Descriptions.Item>
        <Descriptions.Item label="赠送积分" span={2}>20</Descriptions.Item>
      </Descriptions>

      {/* 买家信息 */}
      <Descriptions title="买家信息 :" >
        <Descriptions.Item label="用户微信">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="用户手机">1810000000</Descriptions.Item>
        <Descriptions.Item label="用户地址">Hangzhou, Zhejiang</Descriptions.Item>
      </Descriptions>

      {/* 课程信息 */}

      <div className="infoTable">
        <h2>课程信息 :</h2>
        <Table columns={columns} bordered dataSource={data} pagination={{ hideOnSinglePage: true }} />
      </div>

      {/* 订单信息 */}
      <div className="infoTable">
        <h2>订单信息 :</h2>
        <Table columns={columns1} bordered dataSource={data1} pagination={{ hideOnSinglePage: true }} />
      </div>

      {/* 订单操作记录 */}
      <div className="infoTable">
        <h2>订单操作记录 :</h2>
        <Table columns={columns2} bordered dataSource={data2} pagination={{ hideOnSinglePage: true }} />
      </div>

      {/* 弹出层 */}
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

export default OrderDetails;