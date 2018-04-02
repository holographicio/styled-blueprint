import theme from 'styled-theming';
import { darkTextColor, textColor } from '../../../style/theme';
import styled from 'styled-components';
import { default as BPListItem } from './ListItemWrapper';

const styles = {
  color: theme('mode', {
    color: darkTextColor,
    dark: darkTextColor,
    light: textColor,
    neutral: textColor,
  }),
};

const ListItem = styled(BPListItem)`
  &&& {
    color: ${styles.color};
  }
`;

export default ListItem;
