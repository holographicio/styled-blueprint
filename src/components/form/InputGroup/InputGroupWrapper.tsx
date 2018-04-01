import * as React from 'react';
import cx from 'classnames';
import { omit } from 'lodash';
import { StatusEnum } from 'js/base';
import {
  Classes,
  IInputGroupProps,
  InputGroup as BPInputGroup,
} from '@blueprintjs/core';

interface InputGroupProps extends IInputGroupProps {
  id?: string;
  status?: StatusEnum;
  large?: boolean;
}

const InputGroupWrapper: React.StatelessComponent<InputGroupProps> = ({
  className,
  large,
  ...props
}) => {
  const classNames = {
    [Classes.LARGE]: large,
  };

  return (
    <BPInputGroup
      className={cx(className, classNames)}
      {...omit(props, 'status')}
    />
  );
};

export default InputGroupWrapper;
