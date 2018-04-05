import * as React from 'react';
import { Callout as BPCallout, ICalloutProps } from '@blueprintjs/core';
import { omit } from 'lodash';
import { Status } from '../../types/Status';

export interface CalloutProps extends ICalloutProps {
  large?: boolean;
  outline?: boolean;
  status?: Status;
}

const CalloutWrapper: React.StatelessComponent<CalloutProps> = ({
  className,
  ...props
}) => {
  return <BPCallout className={className} {...omit(props, ['status'])} />;
};

export default CalloutWrapper;
