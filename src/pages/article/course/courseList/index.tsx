import React from 'react'
import {Link} from 'react-router-dom'

const CourseEidt: React.FC<{}> = function CourseEidt(){

  return (
    <div>
      <h1>课程列表</h1>
      <Link to="/article/course/courseEdit">课程编辑</Link><br/>
      <Link to="/article/course/courseRecycled">课程回收站</Link>
    </div>
  )
}

export default CourseEidt;