import React from 'react';
import Form from 'form-pilot';

export default () => {

  const control = Form.useControl();

  return (
    <>
      <Form.Item
        control={control}
        getValueFromEvent={e => e.target.checked}
      >
        <input type="checkbox" />
      </Form.Item>
      <Form.Update
        control={control}
      >
        {
          (control) => {
            return JSON.stringify(control?.getValue());
          }
        }
      </Form.Update>
    </>
  );
};
