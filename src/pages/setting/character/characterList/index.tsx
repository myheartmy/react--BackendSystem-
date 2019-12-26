import React from 'react'
import { Icon, Input, Button } from "antd"
import CharacterListTable from "./children/CharacterListTable"


import "./style.scss"
import { Link } from 'react-router-dom'

const CharacterList: React.FC<{}> = function CharacterList() {


  return (
    <div id="CharacterList">
      {/* 筛选 */}
      <div className="search">
        <div className="title">
          <Icon type="appstore" />
          <span>筛选</span>
        </div>
        {/* 条件 */}
        <div className="type">
          <div className="input">
            <span>输入搜索 : </span>
            <Input placeholder="输入员工姓名或账号" />
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
          <Link to="/setting/character/characterEdit"><Button><Icon type="plus-circle" theme="filled" />新增角色</Button></Link>
        </div>
        {/* 用户列表 */}
        <CharacterListTable />
      </div>
    </div>
  )
}

export default CharacterList;