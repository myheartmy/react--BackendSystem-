import React, { useCallback, useState,useEffect } from 'react'
import { Input, Button, Icon, Select, Switch ,message} from "antd"
import {updateWorkerData,addWorkerData} from "../../../../store/models/setting";
import immutable from "immutable";
import { useDispatch, useSelector } from 'react-redux'
import "./style.scss"
const { Option } = Select;
const { Map } = immutable;



const StaffEdit: React.FC<{}> = function StaffEdit(data: any) {
  let dataVal:any=null;
  console.log(data);
  const dispatch = useDispatch();
  dataVal = useSelector(state => (state as any).getIn(['setting', 'worker', 'data', data.history.location.state.index]));
  if(data.history.location.state.type==="add"){
    dataVal=Map({
      password:null,
      name: null,
      vipPhone: null, // 会员号码
      roles: 'admin',  //角色     管理员  客服
      addTime:new Date().getTime(), //时间戳
      isForbidden: false,// 禁用账号, 启用 或 停用 员工
    })
  }
  const [state, setState] = useState(dataVal);

  // 名字
  const nameAction = useCallback((ev) => {
    ev.persist()
    setState((state: any) => state.set("name", ev.target.value));
  }, []);

  // 密码
  const passAction = useCallback((ev) => {
    ev.persist()
    setState((state: any) => state.set("password", ev.target.value));
  }, []);

  // 手机号码
  const phoneAction = useCallback((ev) => {
    ev.persist()
    setState((state: any) => state.set("vipPhone", ev.target.value));
  }, []);

  // 角色
  const handleChange = useCallback((value) => {
    setState((state: any) => state.set("roles", value));
  }, [])

  // 状态值
  const onChange = useCallback((checked) => {
    setState((state: any) => state.set("isForbidden", checked));
  }, []);

  // 提交
  const submitAction = useCallback(() => {
    dispatch(updateWorkerData(state.toJS()))
  }, [state,dispatch]);

  //新增
  const newAction = useCallback(() => {
    if(state.get("name")===null||state.get("password")===null||state.get("vipPhone")===null){
      message.error('请填写完整',0.5);
      return;
    }
    dispatch(addWorkerData(state.toJS()))
  }, [state,dispatch]);

  // 取消
  const cancelAction = useCallback(() => {
    setState(dataVal);
  }, [])

  return (
    <div id="StaffEdit">
      <h2>请填写角色信息</h2>

      <div className="change">

        <div className="title">账号信息 :</div>

        <div className="info-item">
          <p><span>员工姓名</span><span className="redSpan">*</span>:</p>
          <Input value={state.get("name")} onChange={nameAction} />
        </div>

        <div className="info-item">
          <p><span>工号</span><span className="redSpan">*</span>:</p>
          {state.get("id")?<Input value={state.get("id")} disabled />:<Input disabled />}
         
        </div>

        <div className="info-item">
          <p><span>密码</span><span className="redSpan">*</span>:</p>
          <Input placeholder="请输入6位以上密码,数字或英文" value={state.get("password")} onChange={passAction} type="password" />
        </div>

        <div className="info-item">
          <p><span>手机号码</span><span className="redSpan">*</span>:</p>
          <Input type="number" value={state.get("vipPhone")} onChange={phoneAction} />
        </div>

        <div className="info-item">
          <p><span>状态</span><span className="redSpan">*</span>:</p>

          <Switch checked={state.get("isForbidden")} onChange={onChange} />
        </div>

        <div className="info-item">
          <p><span>角色</span><span className="redSpan">&nbsp;</span>:</p>
          <Select value={state.get("roles")} style={{ width: 160 }} onChange={handleChange}>
            <Option value="boss">超级管理员</Option>
            <Option value="admin">管理员</Option>
            <Option value="service">客服</Option>
          </Select>
        </div>

      </div>
      <div className="allBtn">
      {dataVal.get("id")?<Button className="saveBtn" type="primary" onClick={submitAction}><Icon type="save" theme="filled" />保存</Button>:<Button className="saveBtn" type="primary" onClick={newAction}><Icon type="save" theme="filled" />新增</Button>
      }
        <Button className="cancelBtn" type="primary" onClick={cancelAction}>
          <Icon type="undo" />
          取消
      </Button>
      </div>
    </div>
  )
}

export default StaffEdit;