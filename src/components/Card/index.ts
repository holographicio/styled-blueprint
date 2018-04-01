import theme from 'styled-theming';
import { Card as BPCard } from '@blueprintjs/core';
import styled from 'styled-components';
import {
  appBackgroundColor,
  darkAppBackgroundColor,
  neutralAppBackgroundColor,
} from '../../style/theme';

const styles = {
  backgroundColor: theme('mode', {
    dark: darkAppBackgroundColor,
    light: appBackgroundColor,
    neutral: neutralAppBackgroundColor,
  }),
};

const Card = styled(BPCard)`
  &&& {
    background-color: ${styles.backgroundColor};
  }
`;

export default Card;
