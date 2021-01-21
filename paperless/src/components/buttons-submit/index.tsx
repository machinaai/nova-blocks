import { Button, Form } from "antd";
import React from "react";
import { PropsBlock } from "./interfaces/PropsBlock";

export const ButtonsSubmit: React.FC<PropsBlock> = ({
  but_option2 = "Option2",
  colorOp2 = "purple",
  actionOp2,
  typeBtn2,
}) => {

  const [form] = Form.useForm();

  return (
    <div>
      <Button
        type="text"
        size="large"
        style={{ color: colorOp2 }}
        htmlType={typeBtn2}
        onClick={actionOp2}
        block
      >
        {but_option2}
      </Button>
    </div>
  );
};
