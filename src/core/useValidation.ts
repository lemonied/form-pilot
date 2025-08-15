import React from 'react';
import { STORE_INTERNAL_TOKEN } from '../utils/constants';
import type { InternalControl } from './store';
import type { Control, ValidationError, Validation } from '../utils/interface';
import { useMergedInstance } from './useContext';

export const useValidation = (control?: Control) => {
  const mergedControl = useMergedInstance(control) as InternalControl;
  const validatingRef = React.useRef<Promise<any>>(undefined);
  const [, forceUpdate] = React.useState({});
  const stateRef = React.useRef<Validation>({ status: 'init' });

  React.useEffect(() => {

    const setState = (value: Validation) => {
      if (value.status !== stateRef.current?.status) {
        stateRef.current = value;
        forceUpdate({});
      }
    };

    const store = mergedControl?.getStore(STORE_INTERNAL_TOKEN);

    const handleValidating = (validating?: Promise<any>) => {
      validatingRef.current = validating;
      if (validating) {
        setState({
          ...stateRef.current,
          status: 'pending',
        });
        validating.then(() => {
          if (validatingRef.current === validating) {
            setState({ status: 'fulfilled' });
          }
        }).catch((errors: ValidationError[]) => {
          if (validatingRef.current === validating) {
            setState({ status: 'rejected', results: errors });
          }
        });
      } else {
        setState({ status: 'init' });
      }
    };
    
    handleValidating(store?.validating);

    return store?.validationChange.add(handleValidating);
    
  }, [mergedControl]);

  return stateRef.current;
};