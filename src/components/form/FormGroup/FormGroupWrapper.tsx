import * as React from 'react';
import { FormGroup as BPFormGroup, IFormGroupProps } from '@blueprintjs/core';
import { omit } from 'lodash';
import { StatusEnum } from 'js/base';

interface FormGroupProps extends IFormGroupProps {
  status?: StatusEnum;
}

const FormGroupWrapper: React.SFC<FormGroupProps> = props => (
  <BPFormGroup {...omit(props, 'status')} />
);

export default FormGroupWrapper;
