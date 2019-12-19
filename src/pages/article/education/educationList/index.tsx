import React from 'react'
import {Link} from 'react-router-dom'


const EducationList: React.FC<{}> = function EducationList(){

  return (
    <div>
      <h1>教育头条列表</h1>
      <Link to="/article/education/educationEdit">教育头条编辑</Link><br/>
      <Link to="/article/education/educationRecycled">教育头条回收站</Link>
    </div>
  )
}

export default EducationList;