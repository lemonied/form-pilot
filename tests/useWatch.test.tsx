import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Form from '../src/index';
import type { Control } from '../src/index';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('useWatch', () => {
  test('useWatch fn', () => {
    let isTouch: boolean | undefined = undefined;
    const formRef = React.createRef<Control>();
    const Ele = () => {
      isTouch = Form.useWatch((_, ctl) => {
        return ctl.isTouched();
      });
      return null;
    };
    const { container } = render(
      <Form
        ref={formRef}
        initialValues={{ name: 'lemonied' }}
      >
        <Ele />
        <Form.Item
          name="name"
        >
          <input id="name" />
        </Form.Item>
      </Form>,
    );
    expect(isTouch).toBeFalsy();
    fireEvent.change(container.querySelector('#name')!, {
      target: { value: 'apple' },
    });
    expect(isTouch).toBeTruthy();
    React.act(() => {
      formRef.current?.reset();
    });
    expect(isTouch).toBeFalsy();
  });
});
