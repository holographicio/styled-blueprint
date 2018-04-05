import * as React from 'react';
import cx from 'classnames';
import { Classes } from '@blueprintjs/core';
import { omit } from 'lodash';
import { Status } from '../../../types/Status';

export interface InputProps {
  className?: string;
  large?: boolean;
  minimal?: boolean;
  outline?: boolean;
  status?: Status;
}

const InputWrapper: React.StatelessComponent<InputProps> = ({
  className,
  large,
  minimal,
  ...props
}) => {
  const classNames = {
    [Classes.LARGE]: large,
    [Classes.MINIMAL]: minimal,
  };

  return (
    <input
      className={cx(className, classNames)}
      {...omit(props, ['outline', 'status'])}
    />
  );
};

export default InputWrapper;
