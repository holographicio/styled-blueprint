import theme from 'styled-theming';
import {
  darkTextColor,
  textColor,
  textColorDisabled,
} from '../../../style/theme';
import styled from 'styled-components';

const styles = {
  color: theme('mode', {
    color: darkTextColor,
    dark: darkTextColor,
    light: textColor,
    neutral: textColorDisabled,
  }),
};

export const Heading1 = styled.h1`
  color: ${props => props.color || styles.color};
`;

export const Heading2 = styled.h2`
  color: ${props => props.color || styles.color};
`;

export const Heading3 = styled.h3`
  color: ${props => props.color || styles.color};
`;

export const Heading4 = styled.h4`
  color: ${props => props.color || styles.color};
`;

export const Heading5 = styled.h5`
  color: ${props => props.color || styles.color};
`;
