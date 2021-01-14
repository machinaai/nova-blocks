import { Button } from 'antd'
import React from 'react'
import { PropsBlock } from './interfaces/PropsBlock'

export const ButtonsSubmit: React.FC<PropsBlock> = (
  {
    but_option1 = 'Option1',
    colorOp1 = 'white',
    actionOp1,
    typeBtn1="submit",
    but_option2 = 'Option2',
    colorOp2 = 'purple',
    actionOp2,
    typeBtn2
  }
) => {
  return (
    <div >
        <Button type="primary" shape="round" size='large' style={{ color: colorOp1 }} htmlType={typeBtn1} onClick={actionOp1} block>
          {but_option1}
        </Button>
        <Button type="text" size='large' style={{ color: colorOp2 }} htmlType={typeBtn2} onClick={actionOp2} block>
          {but_option2}
        </Button>
    </div>
  )
}
