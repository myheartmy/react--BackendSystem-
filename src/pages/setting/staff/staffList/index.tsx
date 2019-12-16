import React from 'react'
import {Link} from 'react-router-dom'

const StaffList: React.FC<{}> = function StaffList(){

  return (
    <div>
      <h1>员工列表</h1>
      <Link to="/setting/staff/staffEdit">教育头条编辑</Link>
    </div>
  )
}

export default StaffList;