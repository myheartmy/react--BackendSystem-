import React, { useCallback } from 'react'
import "./style.scss"
import { InputNumber,Button,Icon } from 'antd'


const GeneralSetting: React.FC<{}> = function GeneralSetting() {

  const onChange = useCallback((value) => { console.log('changed', value); }, [])
  const onChange1 = useCallback((value) => { console.log('changed', value); }, [])
  const onChange2 = useCallback((value) => { console.log('changed', value); }, [])
  const onChange3 = useCallback((value) => { console.log('changed', value); }, [])
  const onChange4 = useCallback((value) => { console.log('changed', value); }, [])

  return (
    <div id="GeneralSetting">

      <div className="setting">
        待付款订单取消时间：拍下未付款订单
          <InputNumber min={1} defaultValue={1} onChange={onChange} />
        分钟内未付款，自动取消订单
        </div>

        <div className="setting">
          累计消费满<InputNumber min={1} defaultValue={1} onChange={onChange1} />元，升一级；最高
          <InputNumber min={1} defaultValue={1} onChange={onChange2} />级
        </div>

        <div className="setting">
          每<InputNumber min={1} defaultValue={1} onChange={onChange3} />积分可抵扣
          <InputNumber min={1} defaultValue={1} onChange={onChange4} />元
        </div>

        <Button type="primary">
        <Icon type="save" theme="filled" />
      保存
    </Button>

    </div>
  )
}

export default GeneralSetting;