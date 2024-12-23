# form-pilot

[![NPM version](https://img.shields.io/npm/v/form-pilot.svg?style=flat)](https://npmjs.org/package/form-pilot)
[![NPM downloads](http://img.shields.io/npm/dm/form-pilot.svg?style=flat)](https://npmjs.org/package/form-pilot)

The data controller of the form does not render any DOM elements

## Dependencies

`react>=19.0.0`

## Usage

```tsx
import React from 'react';
import Form, { Rules } from 'form-pilot';
import type { FormItemProps } from 'form-pilot';

const CustomItem = (props: FormItemProps) => {
  const control = Form.useControl(props.control);
  return (
    <div>
      <Form.Item {...props} control={control} />
      <Form.Validation control={control}>
        {
          (validation) => {
            return (
              <div>
                {
                  validation?.results?.map((result, index) => {
                    return (
                      <span key={index} style={{ color: result.type === 'error' ? 'red' : 'orange' }} >{result.message}</span>
                    );
                  })
                }
              </div>
            );
          }
        }
      </Form.Validation>
    </div>
  );
};

export default () => {
  const control = Form.useControl();
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      control.validateFields().then(values => {
        // eslint-disable-next-line no-console
        console.log(values);
      }).catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
      return false;
    }}>
      <Form control={control} initialValues={{ nickname: 'hello world', information: { age: 18, email: '' }, skills: [{ name: 'basketball', desc: 'A+' }] }}>
        <CustomItem
          name="nickname"
          rules={[Rules.required(), Rules.maxLength(10, { type: 'warning' })]}
        ><input /></CustomItem>
        <Form.Group name="information">
          <CustomItem name="age"><input type="number" /></CustomItem>
          <CustomItem name="email" rules={[Rules.email()]}><input /></CustomItem>
        </Form.Group>
        <Form.List name="skills">
          {
            (fields, control) => {
              return (
                <>
                  {
                    fields.map(field => {
                      return (
                        <div key={field.key} style={{ display: 'flex' }}>
                          <Form.Group name={field.name}>
                            <CustomItem name="name"><input /></CustomItem>
                            <CustomItem name="desc"><input /></CustomItem>
                            <button type="button" onClick={() => control.remove(field.name)}>remove this item</button>
                          </Form.Group>
                        </div>
                      );
                    })
                  }
                  <button type="button" onClick={() => control.add({ name: '', desc: '' })}>Add Item</button>
                </>
              );
            }
          }
        </Form.List>
      </Form>
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => control.reset()}>Reset</button>
        <button type="button" onClick={() => control.clearValidation()}>Clear Validation Errors</button>
      </div>
    </form>
  );
};
```

## API

[Documents](https://lemonied.github.io/form-pilot/api)

## Development

```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

# build library source code
$ npm run build

# build library source code in watch mode
$ npm run build:watch

# build docs
$ npm run docs:build

# check your project for potential problems
$ npm run doctor
```

## LICENSE

MIT
