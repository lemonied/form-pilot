import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Form from '../src/index';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('useWatch', () => {
  test('useWatch fn', () => {
    let isTouch: boolean | undefined = undefined;
    const Ele = () => {
      isTouch = Form.useWatch((_, ctl) => {
        return ctl.isTouched();
      });
      return null;
    };
    const { container } = render(
      <Form initialValues={{ name: 'lemonied' }}>
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
  });
});
