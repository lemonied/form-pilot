import { Form } from 'rc-easy-form';
import React from 'react';

export default () => {
  const control = Form.useControl();
  console.log(control);

  const control2 = Form.useControl();
  console.log('control2', control2);

  return (
    <Form
      control={control}
      initialValue={{
        group1: {
          field1: '123',
        },
      }}
    >
      <Form.Group name="group1">
        <Form.Control name="field1" control={control2}>
          <input />
        </Form.Control>
      </Form.Group>
    </Form>
  );
};
