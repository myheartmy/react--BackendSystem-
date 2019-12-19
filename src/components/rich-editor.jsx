import React from 'react'
import Simditor from 'simditor'
import 'simditor/styles/simditor.scss'
import $ from 'jquery'



export default class RichEditor extends React.Component{
  state = {
    value: ''
  }

  render(){
    return (
      <div>
        <textarea id="editor"></textarea>
        <input type="text" name="name"/>
      </div>
    )
  }

  componentDidMount(){
    var editor = new Simditor({
      textarea: $('#editor'),
      placeholder: 'hello world',
      upload: {}
    });

    // 设置初始值
    editor.setValue(this.state.value);

    // 监听change事件
    editor.on('valuechanged', ()=>{
      this.setState({value: editor.getValue()});
    })
  }


  getData(){
    return this.state.value;
  }

}