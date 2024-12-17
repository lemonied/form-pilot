import React from 'react';

export const Input = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {

  let mergedProps = props;

  if ('value' in props) {
    mergedProps = {
      ...props,
      value: props.value ?? '',
    };
  }

  return (
    <input {...mergedProps} />
  );
};
