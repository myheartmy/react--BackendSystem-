import React, { useCallback } from 'react'
import { Icon, Input, DatePicker, Button, Checkbox ,Tabs} from "antd"
import ListTable from "./children/List"
import moment from 'moment';
import "./style.scss"

const { RangePicker } = DatePicker;

const disabledDate = (current: moment.Moment | null) => {
  if (!current) {
    return false;
  } else {
    return current > moment().endOf('day');;
  }
}

const Finace: React.FC<{}> = function Finace() {

  const onChange = useCallback((dates: any, dateStrings: [string, string]) => {
    console.log(dates, dateStrings);
  }, []);

  const onChangeCheckBox = useCallback((checkedValues) => {
    console.log('checked = ', checkedValues);
  }, [])

  const plainOptions = ['待支付', '已关闭', '学习中','已完成'];
  const options = [
    { label: '课程订单', value: '0' },
    { label: '活动订单', value: '1' }
  ];



  return (
    <div id="finance">

      {/* 统计和筛选 */}
      <div className="count-filtrate">
        <div className="title">
          <Icon type="appstore" />
          <span>财务统计</span>
        </div>
        <div className="price-count">
          <p><span>订单总额 :</span> <b>$20000</b></p>
          <p><span>订单总数 :</span> <b>300</b></p>
        </div>

        {/* 筛选 */}
        <div className="search">
          <div className="title">
            <Icon type="appstore" />
            <span>筛选</span>
          </div>
          {/* 条件 */}
          <div className="checkBox">
            <div>
              <span>订单状态：</span>
              <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChangeCheckBox} />
            </div>
            <div>
              <span>订单分类：</span>
              <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChangeCheckBox} />
            </div>
          </div>
          <div className="type">

            <div className="input">
              <span>输入搜索 : </span>
              <Input placeholder="请输入昵称或手机号..." />
            </div>
            {/* 日期选择器 */}
            <div className="selectData">
              <span>下单时间 : </span>
              <RangePicker onChange={onChange} disabledDate={disabledDate} />
            </div>
            <Button><Icon type="filter" theme="filled" />筛选</Button>
            <div className="clear">清空筛选条件</div>
          </div>
        </div>
      </div>

      {/* 数据列表 */}
      <ListTable />


    </div>
  )
}

export default Finace;











