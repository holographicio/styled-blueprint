import theme from 'styled-theming';
import { darkTextColor, textColor } from '../../../style/theme';
import styled from 'styled-components';
import BPList from './ListWrapper';

const styles = {
  color: theme('mode', {
    color: darkTextColor,
    dark: darkTextColor,
    light: textColor,
    neutral: textColor,
  }),
};

const List = styled(BPList)`
  &&& {
    color: ${styles.color};
  }
`;

export default List;
