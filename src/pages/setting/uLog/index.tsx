import React,{useCallback} from 'react'
import {Icon,Input,DatePicker,Button,Select} from "antd"
import moment from "moment";
import ULogList from "./children/uLogList"
import "./style.scss"

const {RangePicker}  = DatePicker;
const { Option } = Select;


const disabledDate = (current: moment.Moment | null) => {
  if (!current) {
    return false;
  } else {
    return current > moment().endOf('day');;
  }
}



const ULog: React.FC<{}> = function ULog(){

  const onChange = useCallback((dates: any, dateStrings: [string, string]) => {
    console.log(dates, dateStrings);
  }, []);

  const  handleChange=useCallback((value)=>{ console.log(`selected ${value}`);},[])



  return (
    <div id="uLog">
           {/* 筛选 */}
           <div className="search">
        <div className="title">
          <Icon type="appstore" />
          <span>筛选</span>
        </div>
        {/* 条件 */}
        <div className="type">
          <div className="select">
            <span>操作人 : </span>
          <Select defaultValue="请选择" style={{ width: 160 }} onChange={handleChange}>
            <Option value="admin">admin</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled">Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>
          </div>
          {/* 日期选择器 */}
          <div className="selectData">
            <span>提交时间 : </span>
            <RangePicker onChange={onChange}  disabledDate={disabledDate} />
          </div>
          <Button><Icon type="filter" theme="filled" />筛选</Button>
          <div className="clear">清空筛选条件</div>
        </div>
      </div>

      <ULogList/>
    </div>
  )
}

export default ULog;