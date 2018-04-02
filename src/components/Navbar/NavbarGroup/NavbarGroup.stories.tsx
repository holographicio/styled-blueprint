import * as React from 'react';
import NavbarGroup from './';
import { storiesOf } from '@storybook/react';

storiesOf('NavbarGroup', module).add('default', () => (
  <NavbarGroup>Click Me</NavbarGroup>
));
