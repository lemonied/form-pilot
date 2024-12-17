import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Form from '../src/index';
import type { Control } from '../src/index';
import { Input } from '../docs/examples/components/Input';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Form.updateRender', () => {
  test('Form.updateRender', () => {
    const formRef = React.createRef<Control>();
    const mock = jest.fn();

    const nodeFactory = () => (
      <Form
        ref={formRef}
      >
        <Form.Group name="group">
          <Form.Item name="age">
            <Input />
          </Form.Item>
          <Form.Item name="name">
            <Input />
          </Form.Item>
          <Form.Update
            condition={(newValue, oldValue) => {
              return newValue?.name !== oldValue?.name;
            }}
          >
            {
              () => {
                mock();
                return null;
              }
            }
          </Form.Update>
        </Form.Group>
      </Form>
    );

    const { rerender } = render(nodeFactory());

    expect(mock).toHaveBeenCalledTimes(1);

    React.act(() => {
      formRef.current?.setFieldValue(['group', 'age'], '1');
    });
    expect(mock).toHaveBeenCalledTimes(1);

    React.act(() => {
      formRef.current?.setFieldValue(['group', 'name'], '1');
    });
    expect(mock).toHaveBeenCalledTimes(2);

    React.act(() => {
      rerender(nodeFactory());
    });
    expect(mock).toHaveBeenCalledTimes(3);

  });
});
