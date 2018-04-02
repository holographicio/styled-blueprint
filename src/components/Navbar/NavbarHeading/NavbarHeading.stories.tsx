import * as React from 'react';
import NavbarHeading from './';
import { storiesOf } from '@storybook/react';

storiesOf('Navbar/NavbarHeading', module).add('default', () => (
  <NavbarHeading>Click Me</NavbarHeading>
));
