import React, { useCallback ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {requestWorkerData} from "../../../../store/models/setting";
import { Icon, Input, Button, Tabs, Select ,Checkbox} from "antd"
import {useDispatch,useSelector} from "react-redux"
import CharacterListTable from "./children/CharacterListTable"
import "./style.scss"
import Item from 'antd/lib/list/Item';
const { TabPane } = Tabs;
const { Option } = Select;

const StaffList: React.FC<{}> = function StaffList() {
  const handleChange = useCallback((value) => { console.log(`selected ${value}`); }, [])
  const onChangeCheckBox = useCallback((checkedValues) => {
    console.log('checked = ', checkedValues);
  }, [])

  const plainOptions = ['启用', '停用'];

  const dispatch = useDispatch();
  const workerStatus = useSelector(state=>(state as any).getIn(['setting']));

  useEffect(()=>{
    dispatch(requestWorkerData());
  }, [dispatch]);

  return (
    <div id="StaffList">
      {/* 筛选 */}
      <div className="search">
        <div className="title">
          <Icon type="appstore" />
          <span>筛选</span>
        </div>
        {/* 条件 */}
        <div className="type">
          <div className="input">
            <span>角色 : </span>
            <Select defaultValue="管理员" style={{ width: 100 }} onChange={handleChange}>
              <Option value="管理员">管理员</Option>
              <Option value="客服">客服</Option>
            </Select>
          </div>
          <div className="input">
            <span>输入搜索 : </span>
            <Input placeholder="输入员工姓名或账号" />
          </div>

          <div className="input">
            <span>员工状态 : </span>
            <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChangeCheckBox} />
          </div>

          <Button><Icon type="filter" theme="filled" />筛选</Button>
          <div className="clear">清空筛选条件</div>
        </div>
      </div>

            {/* 订单列表 */}
            <div className="order-list">
        <div className="titleAdd">
          <div className="title">
            <Icon type="menu" />
            <span>员工列表</span>
          </div>
          <Link to={{pathname: '/setting/staff/staffEdit', state: {index:null,type:"add"}}}><Button><Icon type="plus-circle" theme="filled" />新增员工</Button></Link>
        </div>
        {/* 用户列表 */}
        <CharacterListTable  data={workerStatus}/>
      </div>
    </div>
  )
}

export default StaffList;