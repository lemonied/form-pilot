import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Form, { Rules } from '../src/index';
import type { Control, FormProps } from '../src/index';
import '@testing-library/jest-dom';
import { Input } from '../docs/examples/components/Input';

afterEach(cleanup);

const TestComponent = (props: FormProps & { mock: (...args: any[]) => any }) => {

  const { mock, ...restProps } = props;
  const nameControl = Form.useControl();

  return (
    <Form
      {...restProps}
      initialValues={{
        name: 'lemonied',
        age: '18',
      }}
    >
      <Form.Group
        name="information"
      >
        <Form.Item
          name="name"
          control={nameControl}
          rules={[
            Rules.required(),
            Rules.email(),
          ]}
        >
          <Input id="name" />
        </Form.Item>
        <Form.Validation
          control={nameControl}
        >
          {
            (validation) => {
              mock(validation);
              return null;
            }
          }
        </Form.Validation>
        <Form.Item
          name="age"
          rules={[
            Rules.required(),
          ]}
        >
          <Input />
        </Form.Item>
      </Form.Group>
    </Form>
  );
};

describe('Form.Validation', () => {
  test('ValidationRender', async () => {
    const formRef = React.createRef<Control>();
    const mock = jest.fn();
    let calledTimes = 1;

    const { container, rerender } = render(
      <TestComponent
        mock={mock}
        validateMode="serial"
        ref={formRef}
      />,
    );

    const nameInput = container.querySelector('#name') as HTMLInputElement;

    await React.act(async () => {
      fireEvent.change(nameInput, { target: { value: '123' } });
      calledTimes += 2;
    });
    expect(mock).toHaveBeenCalledTimes(calledTimes);
    expect(mock.mock.lastCall?.[0]?.status).toBe('rejected');
    expect(mock.mock.lastCall?.[0]?.results?.length).toBe(1);

    await React.act(async () => {
      fireEvent.change(nameInput, { target: { value: '' } });
      calledTimes += 2;
    });
    expect(mock).toHaveBeenCalledTimes(calledTimes);
    expect(mock.mock.lastCall?.[0]?.status).toBe('rejected');
    expect(mock.mock.lastCall?.[0]?.results?.length).toBe(1);

    await React.act(async () => {
      rerender(
        <TestComponent
          mock={mock}
          validateMode="parallel"
          ref={formRef}
        />,
      );
      fireEvent.change(nameInput, { target: { value: '11@qq.com' } });
      calledTimes += 2;
    });
    expect(mock).toHaveBeenCalledTimes(calledTimes);
    expect(mock.mock.lastCall?.[0]?.status).toBe('fulfilled');

    await React.act(async () => {
      fireEvent.change(nameInput, { target: { value: '' } });
      calledTimes += 2;
    });
    expect(mock).toHaveBeenCalledTimes(calledTimes);
    expect(mock.mock.lastCall?.[0]?.status).toBe('rejected');
    expect(mock.mock.lastCall?.[0]?.results?.length).toBe(2);

    await React.act(async () => {
      formRef.current?.validateFields().catch(() => { });
      calledTimes += 2;
    });
    expect(mock).toHaveBeenCalledTimes(calledTimes);
    expect(mock.mock.lastCall?.[0]?.status).toBe('rejected');
    expect(mock.mock.lastCall?.[0]?.results?.length).toBe(2);

    expect(formRef.current?.getValidationErrors()?.length).toBe(3);

    React.act(() => {
      formRef.current?.clearValidation();
      calledTimes += 1;
    });
    expect(mock).toHaveBeenCalledTimes(calledTimes);
    expect(mock.mock.lastCall?.[0]?.status).toBe('init');
    expect(formRef.current?.getValidationErrors()).toBeUndefined();
    
  });
});
