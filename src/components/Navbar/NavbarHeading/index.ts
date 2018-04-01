import NavbarWrapper from './NavbarWrapper';
import theme from 'styled-theming';
import { primaryColor3 } from '../../../style/theme';
import styled from 'styled-components';

const styles = {
  backgroundColor: theme('mode', { light: primaryColor3, dark: primaryColor3 }),
  color: theme('mode', { light: '#fff', dark: '#000' }),
};

const Navbar = styled(NavbarWrapper)`
  &&& {
    color: ${styles.color};
    background: ${props => (props.minimal ? 'none' : styles.backgroundColor)};
    box-shadow: ${props =>
      props.minimal
        ? 'none'
        : '0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2)'};
  }
`;

export default Navbar;
