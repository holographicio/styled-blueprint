import * as React from 'react';
import cx from 'classnames';
import { Classes } from '@blueprintjs/core';
import { omit } from 'lodash';
import { Status } from '../../../types/Status';

export interface SelectProps {
  className?: string;
  large?: boolean;
  minimal?: boolean;
  outline?: boolean;
  status?: Status;
}

const SelectWrapper: React.StatelessComponent<SelectProps> = ({
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
    <select
      className={cx(className, classNames)}
      {...omit(props, ['outline', 'status'])}
    />
  );
};

export default SelectWrapper;
