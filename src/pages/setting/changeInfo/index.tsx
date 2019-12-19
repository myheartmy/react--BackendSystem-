import React from 'react'
import {Input,Button,Icon} from "antd"
import "./style.scss"


const ChangeInfo: React.FC<{}> = function ChangeInfo(){

  return (
    <div id="changeInfo">
      <h2>编辑资料</h2>

      <div className="change">

            <div className="info-item">
                  <p><span>员工姓名</span><span className="redSpan">*</span>:</p>
                  <Input placeholder="Basic usage" />
            </div>

            <div className="info-item">
                  <p><span>工号</span><span className="redSpan">*</span>:</p>
                  <span>000000000</span>
            </div>

            <div className="info-item">
                  <p><span>原密码</span><span className="redSpan">*</span>:</p>
                  <Input placeholder="Basic usage" type="password" />
            </div>

            <div className="info-item">
                  <p><span>新密码</span><span className="redSpan">*</span>:</p>
                  <Input placeholder="请输入6位以上密码,英文或数字" type="password"/>
            </div>

            <div className="info-item">
                  <p><span>确认新密码</span><span className="redSpan">*</span>:</p>
                  <Input placeholder="请再输一次密码" type="password"/>
            </div>



      </div>
      <Button type="primary">
        <Icon type="save" theme="filled" />
      保存
    </Button>
    </div>
  )
}

export default ChangeInfo;