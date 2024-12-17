import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Form from '../src/index';
import type { Control } from '../src/index';
import { Input } from '../docs/examples/components/Input';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('control.setFieldValue', () => {

  test('setFieldValue and get', () => {

    const formRef = React.createRef<Control>();

    const { container } = render(
      <Form
        ref={formRef}
        initialValues={{
          contract: {
            address: 'initialAddress',
          },
        }}
      >
        <Form.Item name="username">
          <Input />
        </Form.Item>
        <Form.Group name="contract">
          <Form.Item name="address">
            <Input id="address" />
          </Form.Item>
          <Form.Item name="phone">
            <Input id="phone" />
          </Form.Item>
        </Form.Group>
        <Form.List name="friends">
          {
            (fields, { add, remove }) => {
              return (
                <>
                  {
                    fields.map(field => {
                      return (
                        <Form.Group name={field.name} key={field.key}>
                          <Form.Item name="name">
                            <Input className="friendName" />
                          </Form.Item>
                          <button type="button" onClick={() => remove(field.name)}>删除</button>
                        </Form.Group>
                      );
                    })
                  }
                  <button type="button" onClick={() => add()} id="add1">添加1</button>
                  <button type="button" onClick={() => add({ name: 'initialName' })} id="add2">添加2</button>
                </>
              );
            }
          }
        </Form.List>
      </Form>,
    );

    expect((container.querySelector('#address') as HTMLInputElement).value).toEqual('initialAddress');
    expect(formRef.current).toBeDefined();
    expect(formRef.current?.get(['contract', 'address'])?.getValue()).toEqual('initialAddress');

    React.act(() => {
      formRef.current?.setFieldValue(['contract', 'phone'], '110');
    });
    expect((container.querySelector('#phone') as HTMLInputElement).value).toEqual('110');

    React.act(() => {
      formRef.current?.setFieldValue(['friends'], [{ name: 'friend1' }]);
    });
    expect((Array.from(container.querySelectorAll('.friendName')) as HTMLInputElement[]).length).toEqual(1);
    expect(formRef.current?.get('friends')?.getValue()).toEqual([{ name: 'friend1' }]);
    expect((Array.from(container.querySelectorAll('.friendName')) as HTMLInputElement[])[0].value).toEqual('friend1');
  });
});
