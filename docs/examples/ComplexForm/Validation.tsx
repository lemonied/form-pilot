import React from 'react';
import Form, { Rules } from 'form-pilot';
import Item from '../components/Item';
import { Input } from '../components/Input';
import { Row, Col } from '../components/Grid';

export default () => {

  const form = Form.useControl();

  return (
    <Row $gap={6}>
      <Form control={form}>
        <Col $flex="0 0 100%">
          <Item
            name="username"
            label="Username"
            rules={[
              Rules.required(),
              Rules.maxLength(5, {
                type: 'warning',
              }),
            ]}
          >
            <Input />
          </Item>
        </Col>
        <Col $flex="0 0 100%">
          <Item
            name="email"
            label="Email"
            rules={[
              Rules.email(),
            ]}
          >
            <Input />
          </Item>
        </Col>
      </Form>
      <Col $flex="0 0 100%">
        <Row $gap={6}>
          <button
            type="button"
            onClick={async () => {
              const values = await form.validateFields();
              // eslint-disable-next-line no-console
              console.log(values);
            }}
          >提交</button>
          <button
            type="button"
            onClick={async () => {
              form.reset();
            }}
          >重置</button>
          <button
            type="button"
            onClick={async () => {
              form.clearValidation();
            }}
          >清除校验</button>
        </Row>
      </Col>
    </Row>
  );
};
