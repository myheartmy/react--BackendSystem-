import React, { useRef, useCallback } from 'react';
import { Button, Icon } from "antd";
import "./style.scss"
import RichEditor from "../../../components/rich-editor"


const AboutUs: React.FC<{}> = function AboutUs() {
  const submitAction = useCallback(() => {
    console.log(RichEditorRef.current?.getData())
  }, [])
  const RichEditorRef = useRef<RichEditor | null>(null);
  return (
    <div id="AboutUs">
      <RichEditor ref={RichEditorRef} />

      <div id="saveBtn">
        <Button className="saveBtn" type="primary" onClick={submitAction}>
          <Icon type="save" theme="filled" />
          保存
        </Button>
      </div>
    </div>
  )
}

export default AboutUs;