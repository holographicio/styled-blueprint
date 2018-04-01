import theme from 'styled-theming';
import { darkTextColor, textColor } from '../../../style/theme';
import styled from 'styled-components';
import { Text as BPText } from '@blueprintjs/core';

const styles = {
  color: theme('mode', {
    color: darkTextColor,
    dark: darkTextColor,
    light: textColor,
    neutral: textColor,
  }),
};

const Text = styled(BPText)`
  &&& {
    color: ${styles.color};
  }
`;

export default Text;
