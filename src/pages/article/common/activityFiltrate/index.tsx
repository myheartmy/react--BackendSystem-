import React,{ useCallback,useState } from 'react'
import { Input,Icon,Button,DatePicker,ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import moment, { locale } from 'moment';
import './style.scss';

const {RangePicker}=DatePicker;
const disabledDate = (current: moment.Moment | null) => {
    if (!current) {
      return false;
    } else {
      return current > moment().endOf('day');
    }
  }
 
const ActivityFilrate: React.FC<{}> = function ActivityFilrate(){
    const onChange = useCallback((dates: any, dateStrings: [string, string]) => {
        console.log(dates, dateStrings);
    }, []);

    const [isActive,setIsActive] = useState(true);

    return (
        <div>
            <ConfigProvider locale={zhCN}>
           {/* 筛选 */}
            <div className="search">
                <div className="title">
                    <Icon type="appstore" className="title-icon" style={{fontSize:'16px',marginRight:'4px'}}/>
                    <span>筛选</span>
                </div>
                {/* 条件 */}
                <div className="conditions">
                    <div className="inputs">
                        <span>输入搜索 : </span>
                        <Input className="swiperslid" placeholder="输入轮播图标题......" />
                    </div>
                    {/* 日期选择器 */}
                    <div className="selectData">
                        <span className="inpupdate">上传时间 : </span>
                        <RangePicker
                        ranges={{
                            Today: [moment(), moment()],
                            'This Month': [moment().startOf('month'), moment().endOf('month')],
                        }}
                        showTime
                        format="YYYY/MM/DD"
                        onChange={onChange}
                        />
                    </div>
                    <div className="btns-search">
                        <Button style={{background:isActive?'#9137F3':"",color:isActive?"#fff":"#999"}} onClick={
                            ()=>setIsActive(true)
                        }><Icon type="plus-circle" theme="filled"/>筛选</Button>
                        <Button className="clear" style={{background:!isActive?'#9137F3':"",color:!isActive?"#fff":"#999"}} onClick={
                            ()=>setIsActive(false)
                        }><Icon type="delete" theme="filled"/>清空筛选条件</Button>
                    </div>
                </div>
            </div>
            </ConfigProvider>
        </div>
    )
}

export default ActivityFilrate;