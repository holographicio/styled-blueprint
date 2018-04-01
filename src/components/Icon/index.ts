import theme from 'styled-theming';
import { darkIconColor, iconColor } from '../../style/theme';
import { Icon as BPIcon } from '@blueprintjs/core';
import styled from 'styled-components';

const styles = {
  color: theme('mode', {
    dark: darkIconColor,
    light: iconColor,
    neutral: darkIconColor,
  }),
};

const Icon = styled(BPIcon)`
  &&& {
    color: ${styles.color};
  }
`;

export default Icon;
