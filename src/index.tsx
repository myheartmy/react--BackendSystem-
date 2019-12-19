import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {Provider} from 'react-redux'
import { ConfigProvider } from 'antd';
import store from './store'
import './style/style.scss'
import './style/reset.scss'
import moment from 'moment';
import 'moment/locale/zh-cn';
import zhCN from 'antd/es/locale/zh_CN';
moment.locale('zh-cn');
// import ajax from "./ajax"

ReactDOM.render(
    
<Provider store={store}>
<ConfigProvider locale={zhCN}>  
<App />
</ConfigProvider>
</Provider>,
 document.getElementById('root')
 );

serviceWorker.unregister();






/* ajax.get("/test.json",{
    params:{
        a:1,
        b:2
    }
})
.then(response=>{
    console.log(response)
})
.catch(error=>{
    console.log(error)
}) */