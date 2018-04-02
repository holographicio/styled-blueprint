import * as React from 'react';
import {
  Callout as BPCallout,
  Classes,
  ICalloutProps,
} from '@blueprintjs/core';
import { omit } from 'lodash';
import { StatusEnum } from 'js/base';

export interface CalloutProps extends ICalloutProps {
  large?: boolean;
  outline?: boolean;
  status?: StatusEnum;
}

const CalloutWrapper: React.StatelessComponent<CalloutProps> = ({
  className,
  ...props
}) => {
  return <BPCallout className={className} {...omit(props, ['status'])} />;
};

export default CalloutWrapper;
