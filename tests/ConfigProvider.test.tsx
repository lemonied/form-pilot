import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Form, { Rules } from '../src/index';
import type { Control, FormProps } from '../src/index';
import '@testing-library/jest-dom';
import { Input } from '../docs/examples/components/Input';

afterEach(cleanup);

const TestComponent = (props: FormProps) => {

  const emailControl = Form.useControl();

  return (
    <Form
      {...props}
      initialValues={{
        information: {
          email: '',
        },
      }}
    >
      <Form.Group
        name="information"
      >
        <Form.Item
          name="email"
          control={emailControl}
          rules={[
            Rules.required(),
            Rules.email(),
          ]}
        >
          <Input id="email" />
        </Form.Item>
        <Form.Validation
          control={emailControl}
        >
          {
            (validation) => {
              if (validation) {
                return validation.results?.map((result, index) => {
                  return (
                    <span key={index} className="email-error">{result.message}</span>
                  );
                });
              }
              return null;
            }
          }
        </Form.Validation>
      </Form.Group>
    </Form>
  );
};

describe('Form.ConfigProvider', () => {
  test('ConfigProvider.validateMessages', async () => {
    const formRef = React.createRef<Control>();

    const { container } = render(
      <Form.ConfigProvider
        validateMessages={{
          required: '必填项',
          email: '邮箱格式错误',
        }}
      >
        <TestComponent ref={formRef} validateMode="parallel" />
      </Form.ConfigProvider>,
    );

    await React.act(async () => {
      formRef.current?.validateFields().catch(() => {});
    });

    const errors = Array.from(container.querySelectorAll('.email-error')) as HTMLSpanElement[];
    expect(errors.length).toBe(2);
    expect(errors.map(error => error.innerHTML)).toEqual(['必填项', '邮箱格式错误']);
  });

});
