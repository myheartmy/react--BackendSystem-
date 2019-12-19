import React from 'react'
import {Link} from 'react-router-dom'

const CharacterList: React.FC<{}> = function CharacterList(){

  return (
    <div>
      <h1>角色列表</h1>
      <Link to="/setting/character/characterEdit">角色编辑</Link>
    </div>
  )
}

export default CharacterList;