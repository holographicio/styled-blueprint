import * as React from 'react';
import { FormGroup as BPFormGroup, IFormGroupProps } from '@blueprintjs/core';
import { omit } from 'lodash';
import { Status } from '../../../types/Status';

interface FormGroupProps extends IFormGroupProps {
  status?: Status;
}

const FormGroupWrapper: React.SFC<FormGroupProps> = props => (
  <BPFormGroup {...omit(props, 'status')} />
);

export default FormGroupWrapper;
