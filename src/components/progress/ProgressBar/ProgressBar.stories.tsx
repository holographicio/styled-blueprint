import * as React from 'react';
import ProgressBar from './';
import { storiesOf } from '@storybook/react';

storiesOf('Progress/ProgressBar', module).add('default', () => (
  <ProgressBar>Click Me</ProgressBar>
));
