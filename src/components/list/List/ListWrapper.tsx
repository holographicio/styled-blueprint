import * as React from 'react';
import cx from 'classnames';
import { ReactNode } from 'react';
import { Classes } from '@blueprintjs/core';

interface ListProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  ordered?: boolean;
  unstyled?: boolean;
}

const ListWrapper: React.SFC<ListProps> = ({
  className,
  children,
  ordered,
  unstyled,
}) => {
  const classNames = {
    [Classes.LIST]: true,
    [Classes.LIST_UNSTYLED]: unstyled,
  };

  if (ordered) {
    return <ol className={cx(className, classNames)}>{children}</ol>;
  }

  return <ul className={cx(className, classNames)}>{children}</ul>;
};

export default ListWrapper;
