import React ,{ useCallback }from 'react';
import { Table,Icon,Button,Modal} from 'antd';
import { Link } from 'react-router-dom';
import "./style.scss"

const columns = [
    {
      title: '轮播图名称',
      dataIndex: 'swipername'
    },
    {
      title: '缩略图',
      dataIndex: 'img',
    },
    {
      title: '上传人',
      dataIndex: 'uppeople',
    },
    {
        title: '上传时间',
        dataIndex: 'uptime',
    },
    {
        title: '操作',
        dataIndex: 'action',
        render: () => {
            return(
                <div>
                    <Link to='#' className="compile-btn">编辑</Link>
                    {/* <span className="del-btn" onClick={ delAction } >加入回收站</span> */}
                    <Button type="link" className="del-btn" onClick={countDown}>加入回收站</Button>
                </div>
            )
        },
    },
  ];
  const countDown = ()=> {
    let secondsToGo = 2;
    const modal = Modal.success({
      title: '加入成功',
      width:'300px',
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
    //   modal.update({
    //     content: `This modal will be destroyed after ${secondsToGo} second.`,
    //   });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }

  const data:any = [];
  for(let i=0;i<46;i++){
    data.push(
        {
          key: i,
          swipername: '500块一双'+i,
          img: 32,
          uppeople: '隔壁老樊'+ i,
          uptime:'2019-12-12',
          action:''
        },
    )
  }
  const rowSelection = {};
const ActivityList: React.FC<{}> = function ActivityList(){
    return (
        <div className='ActivityList'>
            <div className="title">
                    <Icon type="appstore" className="title-icon" style={{fontSize:'16px',marginRight:'4px'}}/>
                    <span>轮播图列表</span>
                    <div className="btns-search">
                        <Link to="#"><Button><Icon type="plus-circle" theme="filled"/>新增轮播图</Button></Link>
                        <Link to="#"><Button className="clear"><Icon type="delete" theme="filled"/>回收站</Button></Link>
                    </div>
                </div>
             <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default ActivityList;