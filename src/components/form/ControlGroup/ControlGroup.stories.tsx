import * as React from 'react';
import ControlGroup from './';
import { storiesOf } from '@storybook/react';

storiesOf('ControlGroup', module).add('default', () => (
  <ControlGroup>Click Me</ControlGroup>
));
