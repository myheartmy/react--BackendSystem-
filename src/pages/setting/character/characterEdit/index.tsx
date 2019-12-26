import React, { useCallback } from 'react'
import { Input, Button, Icon, Select } from "antd"
import "./style.scss"
const { TextArea } = Input;
const { Option } = Select;


const CharacterEdit: React.FC<{}> = function CharacterEdit() {


  const handleChange = useCallback((value) => { console.log(`selected ${value}`); }, [])

  return (
    <div id="CharacterEdit">
        <h2>请填写角色信息</h2>

        <div className="change">

          <div className="title">角色信息 :</div>

          <div className="info-item">
            <p><span>角色名称</span><span className="redSpan">*</span>:</p>
            <Input placeholder="名称" />
          </div>

          <div className="info-item">
            <p><span>角色类型</span><span className="redSpan">&nbsp;</span>:</p>
            <Select defaultValue="管理员" style={{ width: 160 }} onChange={handleChange}>
              <Option value="管理员">管理员</Option>
              <Option value="客服">客服</Option>
            </Select>
          </div>

          <div className="info-item info">
            <p><span>描述</span><span className="redSpan">&nbsp;</span>:</p>
            <TextArea rows={4} />
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

export default CharacterEdit;