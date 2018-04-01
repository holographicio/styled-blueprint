import * as React from 'react';
import cx from 'classnames';
import { Classes, INavbarProps, Navbar as BPNavbar } from '@blueprintjs/core';

interface NavbarProps extends INavbarProps {
  id?: string;
  fixed?: boolean;
  minimal?: boolean;
}

const NavbarWrapper: React.StatelessComponent<NavbarProps> = ({
  className,
  children,
  fixed,
}) => {
  const classNames = {
    [Classes.FIXED_TOP]: fixed,
    [Classes.DARK]: true,
  };

  return <BPNavbar className={cx(className, classNames)}>{children}</BPNavbar>;
};

export default NavbarWrapper;
