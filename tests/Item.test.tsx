import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Form from '../src/index';
import type { Control } from '../src/index';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('FormItem', () => {
  test('FormItem valuePropName', () => {
    let checked: boolean | undefined = undefined;
    render(
      <Form initialValues={{ field1: true }}>
        <Form.Item
          name="field1"
          valuePropName="checked"
        >
          {
            (p) => {
              checked = p.checked as boolean;
              return null;
            }
          }
        </Form.Item>
      </Form>,
    );
    expect(checked).toBe(true);
  });

  test('FormItem render', () => {
    const formRef = React.createRef<Control>();
    const { container } = render(
      <Form
        ref={formRef}
        initialValues={{
          field1: '',
          field2: '',
        }}
      >
        <Form.Item
          name="field1"
        >
          {
            (p) => {
              return (
                <input
                  {...p}
                  id="field1"
                />
              );
            }
          }
        </Form.Item>
        <Form.Item
          name="field2"
        >
          <input id="field2" />
        </Form.Item>
      </Form>,
    );
    fireEvent.change(container.querySelector('#field1')!, {
      target: { value: 'test1' },
    });
    fireEvent.change(container.querySelector('#field2')!, {
      target: { value: 'test2' },
    });
    expect(formRef.current?.getValue()).toEqual({
      field1: 'test1',
      field2: 'test2',
    });
  });
});
