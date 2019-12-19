import React from 'react'
import {Link} from 'react-router-dom'


const GutscheinList: React.FC<{}> = function GutscheinList(){

  return (
    <div>
      <h1>优惠券</h1>
      <Link to="/Gutschein/GutscheinEdit">优惠券编辑</Link><br/>
    </div>
  )
}

export default GutscheinList;