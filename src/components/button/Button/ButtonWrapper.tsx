import * as React from 'react';
import cx from 'classnames';
import { Button as BPButton, Classes, IButtonProps } from '@blueprintjs/core';
import { omit } from 'lodash';
import { Status } from '../../../types/Status';

export interface ButtonProps extends IButtonProps {
  large?: boolean;
  minimal?: boolean;
  outline?: boolean;
  status?: Status;
}

const ButtonWrapper: React.StatelessComponent<ButtonProps> = ({
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
    <BPButton
      className={cx(className, classNames)}
      {...omit(props, ['outline', 'status'])}
    />
  );
};

export default ButtonWrapper;
