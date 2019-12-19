import React from 'react'
import {Link} from 'react-router-dom'

const StarProfessorsList: React.FC<{}> = function StarProfessorsList(){

  return (
    <div>
      <h1>明星教师列表</h1>
      <Link to="/article/starProfessors/starProfessorsEdit">明星教师编辑</Link><br/>
      <Link to="/article/starProfessors/starProfessorsRecycled">明星教师回收站</Link>
    </div>
  )
}

export default StarProfessorsList;