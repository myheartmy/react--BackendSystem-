import React from 'react';
import {Link} from 'react-router-dom';
import ActivityList from '../../common/activityList';
import ActivityFilrate from '../../common/activityFiltrate';
import './style.scss'

const SlideShowList: React.FC<{}> = function SlideShowList(){

  return (
    <div>
      <ActivityFilrate/>
      <div className='slidelist'>
        <ActivityList/>
      </div>
    </div>
  )
}

export default SlideShowList;