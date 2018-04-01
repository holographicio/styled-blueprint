import * as React from 'react';
import cx from 'classnames';
import { Classes, IMenuProps, Menu as BPMenu } from '@blueprintjs/core';

interface MenuProps extends IMenuProps {
  id?: string;
  large?: boolean;
}

const MenuWrapper: React.StatelessComponent<MenuProps> = ({
  className,
  children,
  large,
}) => {
  const classNames = {
    [Classes.LARGE]: large,
  };

  return <BPMenu className={cx(className, classNames)}>{children}</BPMenu>;
};

export default MenuWrapper;
