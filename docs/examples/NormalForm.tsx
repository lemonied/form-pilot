import React from 'react';
import Form from 'form-pilot';
import { Col, Row } from './components/Grid';
import { Input } from './components/Input';

export default () => {

  const control = Form.useControl();
  
  const usernameControl = Form.useControl();
  const username = Form.useWatch(usernameControl);
  const values = Form.useWatch(control);
  const independentControl = Form.useControl();

  return (
    <>
      <div>
        {new Date().toLocaleString()}
        <Form
          control={control}
          name="normalForm"
          initialValues={{
            username: '默认值 root',
            password: 'password',
            extra: {
              a: 1,
              b: 2,
            },
          }}
        >
          <Row $gap={8}>
            <Col $flex="0 0 33.3%">
              <Form.Item
                name="username"
                control={usernameControl}
                initialValue="默认值"
              >
                <Input placeholder="username" />
              </Form.Item>
              {username}
            </Col>
            <Col $flex="0 0 33.3%">
              <Form.Item
                name="password"
              >
                <Input placeholder="password" />
              </Form.Item>
            </Col>
            <Col $flex="0 0 33.3%">
              <Form.Item
                name={['name', 'first']}
              >
                <Input placeholder="name, first" />
              </Form.Item>
            </Col>
            <Col $flex="0 0 33.3%">
              <Form.Item
                name={['name', 'last']}
              >
                <Input placeholder="name, last" />
              </Form.Item>
            </Col>
            <Col $flex="0 0 33.3%">
              <Form.Group
                name={'detail'}
              >
                <Form.Item name="age">
                  <Input placeholder="detail, age" />
                </Form.Item>
              </Form.Group>
            </Col>
            <Col $flex="0 0 33.3%">
              <Form.Item name={['detail', 'introduce']}>
                <Input placeholder="detail, introduce" />
              </Form.Item>
            </Col>
            <Col $flex="0 0 100%">
              <Form.List
                name="list"
              >
                {
                  (fields, { add, remove }) => {
                    return (
                      <Row $gap={8}>
                        {
                          fields.map(field => {
                            return (
                              <Form.Group key={field.key} name={field.name}>
                                <Col $flex="0 0 100%">
                                  <Row $gap={8}>
                                    <Col $flex="0 0 200px">
                                      <Form.Item
                                        name="prefix"
                                      >
                                        <Input placeholder="prefix" style={{ width: '100%' }} />
                                      </Form.Item>
                                    </Col>
                                    <Col>
                                      <button
                                        onClick={() => remove(field.name)}
                                        type="button"
                                      >删除</button>
                                    </Col>
                                  </Row>
                                </Col>
                              </Form.Group>
                            );
                          })
                        }
                        <Col $flex="0 0 100%">
                          <button
                            onClick={() => add()}
                            type="button"
                          >Add</button>
                        </Col>
                      </Row>
                    );
                  }
                }
              </Form.List>
            </Col>
            <div>
              <Form.Item control={independentControl}>
                <Input placeholder="独立受控（脱离Form）" />
              </Form.Item>
              <button
                onClick={() => independentControl.setValue('independentControl')}
                type="button"
              >independentControl</button>
            </div>
          </Row>
        </Form>
      </div>
      <div>
        {
          JSON.stringify(values, null, 2)
        }
      </div>
      <div>
        <div>
          <button
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log(control.getValue());
            }}
            type="button"
          >control.getValue()</button>
          <button
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log(control.getStrictValue());
            }}
            type="button"
          >control.getStrictValue()</button>
          <button
            onClick={() => control.reset()}
            type="button"
          >reset</button>
          <button
            onClick={() => control.setFieldValue(['list'], [{ prefix: '123' }])}
            type="button"
          >setFieldValue</button>
        </div>
      </div>
    </>
  );
};
