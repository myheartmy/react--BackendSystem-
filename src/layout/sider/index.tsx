import React, { useCallback ,useState} from 'react'
import './style.scss'
import { useHistory } from 'react-router'
import { Layout, Menu, Icon } from 'antd';
import siderConfig from '../../config/sider.config'
import useRouteInfo from '../../utils/useRouteInfo'
import logo1 from '../../assets/logo1.svg'
const { SubMenu } = Menu;
const { Sider } = Layout;

// interface AppState {collapsed: Boolean};

const AppSider: React.FC<{}> = function AppSider() {

  // 切换路由的事件
  const history = useHistory();
  const itemClickAction = useCallback((path: string) => {
    history.push(path);
  }, [history]);

  // 获得展开菜单ids
  const { ids } = useRouteInfo();

  const [collapsed, setCollapsed] = useState(false);

  return (

    <Sider width={200} className="sider"    collapsible  collapsed={collapsed}  onCollapse={()=>{setCollapsed((collapsed=>!collapsed))}}   style={{
      overflowX: 'hidden',
      overflowY: 'auto',
      height: '100vh',
      width:"200vh",
      left: 0,
      background: '#fff'
    }}>
      <div className="logo" style={{padding:collapsed?"0 32px":''}}>
        <img src={logo1} alt="" />
        {!collapsed?<span>非翔教育</span>:''}
      </div>
      <Menu
        mode="inline"
        defaultOpenKeys={[ids[0]]}
        defaultSelectedKeys={[ids[1]]}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          siderConfig.map(configItem => (
            <SubMenu
              key={configItem.id}
              title={
                <span>
                  <Icon type={configItem.icon} theme="filled"/>
                  <span>{configItem.root} </span>
                </span>

              }
            >
              {
                configItem.children.map(item => (
                  <Menu.Item key={item.id} onClick={() => {
                    itemClickAction(item.path);
                  }}>{item.title}</Menu.Item>
                ))
              }
            </SubMenu>
          ))
        }

      </Menu>
    </Sider>
  )
}

export default AppSider;


