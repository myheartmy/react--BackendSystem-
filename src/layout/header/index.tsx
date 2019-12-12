import React from 'react'
import './style.scss'
import { Layout, Menu, Avatar, Icon, Badge } from 'antd';
const { Header } = Layout;

const AppHeader: React.FC<{}> = function AppHeader() {
  return (
    <Header className="app-header">
      <Menu
        className="menu"
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1" className='message'>
          <Badge dot>
            <Icon type="bell" theme="filled" />
          </Badge>
        </Menu.Item>
        <Menu.Item key="2">
          <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
          <span className="title">管理员</span>
        </Menu.Item>

      </Menu>
    </Header>
  )
}

export default AppHeader;