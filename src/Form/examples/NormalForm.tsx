import React from 'react';
import { Button, Input } from 'antd';
import { Form } from 'rc-easy-form';

export default () => {

  const control = Form.useControl();

  return (
    <>
      <div>
        <Form control={control}>
          <Form.Item
            name="username"
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
      <div>
        <Button
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log(control.getValue());
          }}
        >control.getValue()</Button>
      </div>
    </>
  );
};
