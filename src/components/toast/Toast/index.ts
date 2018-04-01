import ButtonWrapper from './ButtonWrapper';
import theme from 'styled-theming';
import { css } from 'styled-components';
import styled from 'styled-components';
import {
  accentColor1,
  buttonBackgroundColor,
  dangerColor,
  darkButtonBackgroundColor,
  primaryColor1,
  successColor,
  warningColor,
} from '../../../style/theme';
export { ButtonProps } from './ButtonWrapper';

const styles = {
  backgroundColor: theme.variants('mode', 'status', {
    accent: {
      color: accentColor1,
      dark: accentColor1,
      light: accentColor1,
    },
    danger: {
      dark: dangerColor,
      light: dangerColor,
    },
    none: {
      dark: buttonBackgroundColor,
      light: darkButtonBackgroundColor,
    },
    primary: {
      dark: primaryColor1,
      light: primaryColor1,
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
  color: theme('mode', { light: '#fff', dark: '#fff', color: '#fff' }),
};

const Button = styled(ButtonWrapper)`
  &&& {
    color: ${styles.color};
    background: none;
    background-color: ${props =>
      !(props.minimal || props.outline) && styles.backgroundColor};
    border: ${props =>
      props.outline && css`2px solid ${styles.backgroundColor}`};
    border-radius: ${styles.borderRadius};
    box-shadow: none;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      background: ${props => !props.minimal && styles.backgroundColor};
      box-shadow: none;
      color: ${props => props.minimal && styles.color};
    }
  }
`;

Button.defaultProps = {
  status: 'none',
};

export default Button;
