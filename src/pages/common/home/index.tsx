import React,{useRef,useEffect,useCallback,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {requestHomeData} from "../../../store/models/home"
import {Link} from 'react-router-dom'
import "./style.scss"
import { Icon } from 'antd';
const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

const Index: React.FC<{}> = function Index() {

const [active, setActive] = useState(true);

const contentRef = useRef<HTMLDivElement | null>(null);

const dispatch = useDispatch();

const requestData = useCallback((val)=>{
  setActive(!active);
  dispatch(requestHomeData(val));
}, [dispatch,active]);

useEffect(()=>{
  // 初始化请求七日数据
  dispatch(requestHomeData(7));
}, [dispatch]);

useEffect(() => {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(contentRef.current);
    const option = {
      color:['#B9DDFF'],
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['12-16', '12-17', '12-18', '12-19', '12-20', '12-21', '12-22'],
          name:"amount",
          nameLocation:"center",
          nameGap:"30"
      },
      yAxis: {
          type: 'value',
          max:30000,
          name:"单位:元"
      },
      series: [{
          data: [8200, 932, 9001, 9340, 12900, 11330, 21320],
          type: 'line',
          name:'amount',
          areaStyle: {}
      }]
  };
    // 绘制图表
    myChart.setOption(option);
}, [contentRef]);

  return (
    <div id="home">

      {/* 经营状况 */}
      <div className="index-survey">
        <div>经营概况<Icon type="menu" /></div>
        <div className="survey-item">
          <div className="items">
            <img src={require("../../../assets/u340.png")} alt="" />
            <div>
              <p>今日参加活动人次</p>
              <b>18</b>
            </div>
          </div>
          <div className="items">
            <img src={require("../../../assets/u340.png")} alt="" />
            <div>
              <p>今日活动收入</p>
              <b>￥18</b>
            </div>
          </div>
          <div className="items">
            <img src={require("../../../assets/u340.png")} alt="" />
            <div>
              <p>今日课程订单数</p>
              <b>18</b>
            </div>
          </div>
          <div className="items">
            <img src={require("../../../assets/u340.png")} alt="" />
            <div>
              <p>今日课程订单收入</p>
              <b>￥18</b>
            </div>
          </div>
        </div>

      </div>


      {/* 待办事项 */}
      <div className="index-survey">
        <div>待办事项<Icon type="menu" /></div>
        <div className="survey-item">

          <Link className="items-event" to="/order/orderList">
            <img src={require("../../../assets/u368.png")} alt="" />
            <div>
              <b>18</b>
              <p>代付款订单</p>
            </div>
          </Link>

          <Link className="items-event" to="/order/orderList">
            <img src={require("../../../assets/u373.png")} alt="" />
            <div>
              <b>18</b>
              <p>待确认订单</p>
            </div>
          </Link>

          

          <Link className="items-event" to="/service/currentSession">
            <img src={require("../../../assets/u378.png")} alt="" />
            <div>
              <b>18</b>
              <p>待回复客户</p>
            </div>
          </Link>

        </div>

      </div>

      {/* 收入趋势 */}
      <div className="index-survey">
        <div>收入趋势<Icon type="menu" /></div>
        <div className="selectTime">
            <span onClick={()=>(requestData(7))} className={active?'active':''}>本周</span>
            <span onClick={()=>(requestData(30))} className={active?'':'active'}>本月</span>
          </div>
        <div className="survey-item">
          <div id="container" ref={contentRef} style={{width:"100%",height: "400px"}}></div>
        </div>

      </div>



    </div>
  )


}


export default Index;