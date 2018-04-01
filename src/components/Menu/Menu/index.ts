import MenuWrapper from './MenuWrapper';
import theme from 'styled-theming';
import styled from 'styled-components';

const styles = {
  backgroundColor: theme('mode', { light: '#000', dark: '#fff' }),
  color: theme('mode', { light: '#fff', dark: '#000' }),
};

const Menu = styled(MenuWrapper)`
  &&& {
    color: ${styles.color};
    background: ${styles.backgroundColor};
  }
`;

export default Menu;
