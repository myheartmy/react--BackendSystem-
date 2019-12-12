import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import './style/reset.scss'
import './style/style.scss'
// import ajax from "./ajax"

ReactDOM.render(
<Provider store={store}>  
<App />
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