import * as React from 'react';
import { ReactNode } from 'react';

interface ListItemProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const ListItemWrapper: React.SFC<ListItemProps> = ({ className, children }) => (
  <li className={className}>{children}</li>
);

export default ListItemWrapper;
