import FormGroupWrapper from './FormGroupWrapper';
import theme from 'styled-theming';
import styled from 'styled-components';
import {
  accentColor1,
  dangerColor,
  darkTextColor,
  successColor,
  textColor,
  warningColor,
} from '../../../style/theme';
import { Status } from '../../../types/Status';

const styles = {
  borderRadius: theme('corners', {
    rounded: '4px',
    square: '0px',
  }),
  color: theme.variants('mode', 'status', {
    danger: {
      dark: dangerColor,
      light: dangerColor,
    },
    none: {
      dark: darkTextColor,
      light: textColor,
    },
    primary: {
      dark: accentColor1,
      light: accentColor1,
    },
    success: {
      dark: successColor,
      light: successColor,
    },
    warning: {
      dark: warningColor,
      light: warningColor,
    },
  }),
};

const FormGroup = styled(FormGroupWrapper)`
  &&& {
    color: ${styles.color};
    border-radius: ${styles.borderRadius};
  }
`;

FormGroup.defaultProps = {
  status: Status.NONE,
};

export default FormGroup;
