import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Form from '../src/index';
import type { Control } from '../src/index';
import type { InternalControl } from '../src/hooks/store';
import '@testing-library/jest-dom';
import { Input } from '../docs/examples/components/Input';

afterEach(cleanup);

describe('control.reset', () => {
  test('root initialValues', () => {
    const formRef = React.createRef<Control>();
    const { container } = render(
      <Form
        ref={formRef}
        initialValues={{
          name: 'lemonied',
          age: '18',
        }}
      >
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
      </Form>,
    );

    expect((container.querySelector('#name') as HTMLInputElement).value).toEqual('lemonied');
    expect((container.querySelector('#age') as HTMLInputElement).value).toEqual('18');

    const mock = jest.fn();
    const store = (formRef.current as InternalControl).getStore('_STORE_INTERNAL_TOKEN_');
    store.validationChange.add(mock);
    React.act(() => {
      formRef.current?.reset();
    });
    expect(mock).toHaveBeenCalledTimes(1);
    expect(formRef.current?.getValue()).toEqual({ name: 'lemonied', age: '18' });
    
  });

  test('item initialValue', () => {
    const formRef = React.createRef<Control>();
    const independentRef = React.createRef<Control>();
    const { container } = render(
      <Form
        ref={formRef}
      >
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
        <Form.Item
          initialValue="independent"
          ref={independentRef}
        >
          <Input id="independent" />
        </Form.Item>
      </Form>,
    );

    expect((container.querySelector('#name') as HTMLInputElement).value).toEqual('');
    expect((container.querySelector('#age') as HTMLInputElement).value).toEqual('');
    expect((container.querySelector('#independent') as HTMLInputElement).value).toEqual('independent');
    expect(formRef.current?.getValue()).toBeUndefined();

    React.act(() => {
      formRef.current?.setValue({ name: 'name', age: 'age' });
      independentRef.current?.setValue('independent1');
    });

    expect((container.querySelector('#name') as HTMLInputElement).value).toEqual('name');
    expect((container.querySelector('#age') as HTMLInputElement).value).toEqual('age');
    expect((container.querySelector('#independent') as HTMLInputElement).value).toEqual('independent1');

    const mock = jest.fn();
    const store = (formRef.current as InternalControl).getStore('_STORE_INTERNAL_TOKEN_');
    store.validationChange.add(mock);
    React.act(() => {
      formRef.current?.reset();
      independentRef.current?.reset();
    });
    expect(mock).toHaveBeenCalledTimes(1);
    expect(formRef.current?.getValue()).toBeUndefined();
    expect((container.querySelector('#independent') as HTMLInputElement).value).toEqual('independent');

  });
});
