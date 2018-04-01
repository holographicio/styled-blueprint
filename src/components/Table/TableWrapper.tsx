import * as React from 'react';
import cx from 'classnames';
import { Classes } from '@blueprintjs/core';

interface TableProps extends React.HTMLProps<HTMLDivElement> {
  bordered?: boolean;
  interactive?: boolean;
  small?: boolean;
  striped?: boolean;
}

const TableWrapper: React.StatelessComponent<TableProps> = ({
  bordered,
  className,
  children,
  interactive,
  small,
  striped,
}) => {
  const classNames = {
    [Classes.HTML_TABLE_BORDERED]: bordered,
    [Classes.HTML_TABLE_STRIPED]: striped,
    [Classes.HTML_TABLE]: true,
    [Classes.INTERACTIVE]: interactive,
    [Classes.SMALL]: small,
  };

  return <table className={cx(className, classNames)}>{children}</table>;
};

export default TableWrapper;
