import React, { useCallback } from 'react'
import { Input, Button, Icon, Select,Switch } from "antd"
import "./style.scss"
const { Option } = Select;


const StaffEdit: React.FC<{}> = function StaffEdit() {


  const handleChange = useCallback((value) => { console.log(`selected ${value}`); }, [])

  const onChange =useCallback((checked)=>{ console.log(`switch to ${checked}`)},[])

  return (
    <div id="StaffEdit">
        <h2>请填写角色信息</h2>

        <div className="change">

          <div className="title">账号信息 :</div>

          <div className="info-item">
            <p><span>员工姓名</span><span className="redSpan">*</span>:</p>
            <Input  />
          </div>
         


          <div className="info-item">
            <p><span>工号</span><span className="redSpan">*</span>:</p>
            <Input  />
          </div>

          <div className="info-item">
            <p><span>密码</span><span className="redSpan">*</span>:</p>
            <Input  placeholder="请输入6位以上密码,数字或英文"/>
          </div>

          <div className="info-item">
            <p><span>手机号码</span><span className="redSpan">*</span>:</p>
            <Input  type="number"/>
          </div>


          <div className="info-item">
            <p><span>工号</span><span className="redSpan">*</span>:</p>
            
          <Switch defaultChecked onChange={onChange} />
          </div>

          <div className="info-item">
            <p><span>角色</span><span className="redSpan">&nbsp;</span>:</p>
            <Select defaultValue="请选择" style={{ width: 160 }} onChange={handleChange}>
              <Option value="管理员">管理员</Option>
              <Option value="客服">客服</Option>
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

export default StaffEdit;