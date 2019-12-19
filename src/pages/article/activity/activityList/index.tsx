import React from 'react'
import {Link} from 'react-router-dom'


const ActivityList: React.FC<{}> = function ActivityList(){

  return (
    <div>
      <h1>活动列表</h1>
      <Link to="/article/activity/activityEdit">活动编辑</Link><br/>
      <Link to="/article/activity/activityRecycled">活动回收站</Link>
    </div>
  )
}

export default ActivityList;