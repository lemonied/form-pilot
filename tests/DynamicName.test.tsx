import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Form from '../src';

afterEach(cleanup);

interface DynamicNameInstance {
  setName(name: string): void;
}
interface DynamicNameProps {
  ref?: React.Ref<DynamicNameInstance | undefined | null>;
}
const DynamicName = (props: DynamicNameProps) => {

  const { ref } = props;

  const [name, setName] = React.useState('name');

  React.useImperativeHandle(ref, () => {
    return {
      setName,
    };
  });

  return (
    <>
      <Form.Item
        name={name}
      >
        <input id="input" />
      </Form.Item>
    </>
  );
};

describe('name transparent', () => {
  test('dynamic name', async () => {
    const instance = React.createRef<DynamicNameInstance>();
    const { container } = render(
      <Form name="form1">
        <DynamicName ref={instance} />
      </Form>,
    );
    expect(container.querySelector('#input')?.getAttribute('name')).toBe('form1.name');
    React.act(() => {
      instance.current?.setName('name2');
    });
    expect(container.querySelector('#input')?.getAttribute('name')).toBe('form1.name2');
  });
});
