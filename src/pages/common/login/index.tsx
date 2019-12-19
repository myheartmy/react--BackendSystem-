import React,{useCallback} from 'react'
import "./style.scss"
import { Input, Icon ,Checkbox,Button } from 'antd';
import img from "../../../assets/login.png"


const Login: React.FC<{}> = function Login() {

  const onChange=useCallback((e)=>{console.log(`checked = ${e.target.checked}`);},[])

  const loginAction = useCallback(()=>{

    console.log("点击了登录")


  },[])



  return (
    <div className="login">

      <div className="userInfo">
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          
          <h2>登录</h2>
          <p>非翔教育后台管理系统</p>
          <div className="loginForm">
          <Input
            placeholder="请输入账号"
            prefix={<Icon type="user" />}
          />
          <br />
          <Input 
            placeholder="请输入账号"
            prefix={<Icon type="shopping" theme="filled" />}
            type="password"
          />
          <div className="remenber">
          <Checkbox onChange={onChange}>一个月免登录</Checkbox>
          <span className="forget">忘记密码请联系管理员</span>
          </div>
          <Button type="primary" className="login" onClick={loginAction}>登录</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;


