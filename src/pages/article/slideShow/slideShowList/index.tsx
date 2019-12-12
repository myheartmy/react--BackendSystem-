import React from 'react'
import {Link} from 'react-router-dom'


const SlideShowList: React.FC<{}> = function SlideShowList(){

  return (
    <div>
      <h1>轮播图列表</h1>
      <Link to="/article/slideShow/slideShowEdit">轮播图编辑</Link><br/>
      <Link to="/article/education/educationRecycled">轮播图回收站</Link>
    </div>
  )
}

export default SlideShowList;