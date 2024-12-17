import React from 'react';
import { cleanup, renderHook } from '@testing-library/react';
import Form from '../src/index';
import '@testing-library/jest-dom';
import { Input } from '../docs/examples/components/Input';

afterEach(cleanup);

describe('control.getValue', () => {
  test('getValue initialValues', () => {
    const { result } = renderHook(Form.useControlInstance, {
      wrapper: (props) => (
        <Form
          initialValues={{
            name: 'lemonied',
            age: '18',
          }}
        >
          {props.children}
          <Form.Item
            name="name"
          >
            <Input id="name" />
          </Form.Item>
          <Form.Item
            name="age"
          >
            <Input id="age" />
          </Form.Item>
        </Form>
      ),
    });

    expect(result.current?.getValue()).toEqual({
      name: 'lemonied',
      age: '18',
    });

    expect(result.current?.get('name')?.getValue()).toBe('lemonied');

    React.act(() => {
      result.current?.setValue({
        age: '19',
      });
    });

    expect(result.current?.get('name')?.getValue()).toBeUndefined();
    expect(result.current?.get('age')?.getValue()).toBe('19');

    React.act(() => {
      result.current?.get('age')?.setValue('20');
    });

    expect(result.current?.get('name')?.getValue()).toBeUndefined();
    expect(result.current?.get('age')?.getValue()).toBe('20');
    expect(result.current?.getValue()).toEqual({ age: '20' });
  });

});
