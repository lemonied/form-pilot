import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Form from '../src/index';
import '@testing-library/jest-dom';
import { PassProps } from './components/PassProps';

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
          <PassProps>
            {
              (p) => {
                checked = p.checked;
                return null;
              }
            }
          </PassProps>
        </Form.Item>
      </Form>,
    );
    expect(checked).toBe(true);
  });
});
