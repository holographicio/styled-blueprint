import * as React from 'react';
import Navbar from './';
import { storiesOf } from '@storybook/react';

storiesOf('Navbar/Navbar', module).add('default', () => (
  <Navbar>Click Me</Navbar>
));
