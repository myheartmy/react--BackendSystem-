import React, { Suspense } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import renderRoutes from './routes/renderRoutes'
import {useSelector} from 'react-redux'
import Loading from './pages/common/loading'
import routes from './routes'
import { Layout, Menu} from 'antd';
import Header from './layout/header'
import Breadcrumb from './layout/breadcrumb'
import Sider from './layout/sider'
import Login from "./pages/common/login"
const { Content } = Layout;




const App: React.FC = () => {

  const isLogin = useSelector(state=>{
    return (state as any).get('root').get('isLogin');
  });

  const role = useSelector(state=>(state as any).get('root').get('userInfo').get('role'));

  return (
    <BrowserRouter>
    {/* 登录鉴权 */}
    <Switch>
          <Route path="/login" component={Login}/>
          <Route render={()=>{
            if(!isLogin){
              return <Redirect to="/login"/>
            }else{
              return <Layout style={{ minHeight: '100vh' }} className="app">
              <Sider />
              <Layout>
                <Header />
                <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb />
                  <Suspense fallback={<Loading />}>
                    {renderRoutes(routes,role)}
                  </Suspense>
                </Content>
              </Layout>
            </Layout>;
            }
          }}/>
        </Switch>
      
    </BrowserRouter>
  );
}

export default App;









