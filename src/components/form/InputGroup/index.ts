import InputGroupWrapper from './InputGroupWrapper';
import theme from 'styled-theming';
import styled from 'styled-components';
import {
  accentColor1,
  buttonBackgroundColor,
  dangerColor,
  darkButtonBackgroundColor,
  successColor,
  warningColor,
} from '../../../style/theme';

const styles = {
  backgroundColor: theme.variants('mode', 'status', {
    danger: {
      dark: dangerColor,
      light: dangerColor,
    },
    none: {
      dark: buttonBackgroundColor,
      light: darkButtonBackgroundColor,
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
  borderRadius: theme('corners', {
    rounded: '4px',
    square: '0px',
  }),
  color: theme('mode', { light: '#fff', dark: '#000' }),
};

const InputGroup = styled(InputGroupWrapper)`
  &&& input {
    color: ${styles.color};
    background: ${styles.backgroundColor};
    border-radius: ${styles.borderRadius};
  }
`;

InputGroup.defaultProps = {
  status: 'none',
};

export default InputGroup;
