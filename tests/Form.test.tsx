import React from 'react';
import { cleanup, renderHook } from '@testing-library/react';
import Form from '../src/index';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Form', () => {
  test('Form initialValues', () => {
    const { result } = renderHook(Form.useControlInstance, {
      wrapper: (props) => <Form {...props} initialValues={{ name: 'lemonied' }} />,
    });
    expect(result.current?.getValue()).toEqual({ name: 'lemonied' });
  });
});
