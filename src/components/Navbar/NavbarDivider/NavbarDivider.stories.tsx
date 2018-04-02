import * as React from 'react';
import NavbarDivider from './';
import { storiesOf } from '@storybook/react';

storiesOf('NavbarDivider', module).add('default', () => (
  <NavbarDivider>Click Me</NavbarDivider>
));
