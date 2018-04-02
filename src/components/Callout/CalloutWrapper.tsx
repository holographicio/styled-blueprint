import * as React from 'react';
import cx from 'classnames';
import {
  Callout as BPCallout,
  Classes,
  ICalloutProps,
} from '@blueprintjs/core';
import { omit } from 'lodash';
import { StatusEnum } from 'js/base';

export interface CalloutProps extends ICalloutProps {
  large?: boolean;
  minimal?: boolean;
  outline?: boolean;
  status?: StatusEnum;
}

const CalloutWrapper: React.StatelessComponent<CalloutProps> = ({
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
    <BPCallout
      className={cx(className, classNames)}
      {...omit(props, ['outline', 'status'])}
    />
  );
};

export default CalloutWrapper;
