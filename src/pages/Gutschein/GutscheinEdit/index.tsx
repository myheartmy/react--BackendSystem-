import React,{useCallback} from 'react'
import {Input,Button,Icon,Switch,DatePicker ,Checkbox,Select   } from "antd";
import "./style.scss"

const GutscheinEdit: React.FC<{}> = function GutscheinEdit(){
  const { Option } = Select;

  // 开关
  const onChange = useCallback((checked:any)=>{
    console.log(`switch to ${checked}`);
  },[]);


  //日期选择
  const onDateChange = useCallback((date, dateString)=>{
    console.log(date, dateString);
  },[]);

  // 多选
  const onCheckBoxChange = useCallback((checkedValues)=>{
    console.log(checkedValues);
  },[]);

  const plainOptions = ['购买课程', '购买活动'];

  //选择
  const handleChange = useCallback((value)=>{
    console.log(`selected ${value}`);
  },[]);


  return (

      <div id="GutscheinEdit">
        <h2>请填写优惠券信息</h2>
  
        <div className="change">
  
              <div className="info-item">
                    <p><span>优惠券标题</span><span className="redSpan"> * </span>:</p>
                    <Input placeholder="请输入标题" />
              </div>
  
              <div className="info-item">
                    <p><span>优惠券描述</span><span className="redSpan">&nbsp;&nbsp;&nbsp;</span>:</p>
                    <Input placeholder="请输入描述" />
              </div>
  
              <div className="info-item">
                    <p><span>优惠券上架</span><span className="redSpan"> * </span>:</p>
                    <Switch defaultChecked onChange={onChange} />
              </div>
  
              <div className="info-item">
                    <p><span>优惠金额</span><span className="redSpan"> * </span>:</p>
                    <Input  prefix="￥" placeholder="" />
              </div>
  
              <div className="info-item">
                    <p><span>截止时间</span><span className="redSpan"> * </span>:</p>
                    <DatePicker onChange={onDateChange} />
              </div>

              <div className="info-item">
                    <p><span>使用门槛</span><span className="redSpan"> * </span>:</p>
                    <Input  prefix="￥" placeholder="请输入使用门槛" />
              </div>
  
              <div className="info-item">
                    <p><span>使用范围</span><span className="redSpan"> * </span>:</p>
                    <Checkbox.Group options={plainOptions} onChange={onCheckBoxChange} />
              </div>
  
              <div className="info-item">
                    <p><span>获得方法</span><span className="redSpan"> * </span>:</p>
                    <Select defaultValue="好友推荐获得"  onChange={handleChange}>
                      <Option value="会员升级获得">会员升级获得</Option>
                      <Option value="好友推荐获得">好友推荐获得</Option>
                  </Select>
              </div>
  
  
  
  
        </div>
        <div className="allBtn">
        <Button className="saveBtn" type="primary">
          <Icon type="save" theme="filled" />
        保存
      </Button>
      <Button className="cancelBtn" type="primary">
          <Icon type="undo"  />
        取消
      </Button>
      </div>
      </div>
    
  )
}

export default GutscheinEdit;