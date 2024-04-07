import { Form } from 'rc-easy-form';
import React from 'react';

export default () => {
  const control = Form.useControl();
  console.log(control);

  const control2 = Form.useControl();
  console.log('control2', control2);

  return (
    <Form control={control}>
      <Form.Group name="group1">
        <Form.Field name="field1" control={control2}>
          <input />
        </Form.Field>
      </Form.Group>
    </Form>
  );
};
