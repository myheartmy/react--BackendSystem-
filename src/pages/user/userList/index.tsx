import React from 'react'
import {Link} from 'react-router-dom'

const UserList: React.FC<{}> = function UserList(){

  return (
    <div>
      <h1>用户列表</h1>
      <Link to="/user/userEditDetail">用户编辑详情</Link>
    </div>
  )
}

export default UserList;