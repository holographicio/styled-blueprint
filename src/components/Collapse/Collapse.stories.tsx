import * as React from 'react';
import Collapse from './';
import { storiesOf } from '@storybook/react';

storiesOf('Collapse', module).add('default', () => (
  <Collapse>Click Me</Collapse>
));
