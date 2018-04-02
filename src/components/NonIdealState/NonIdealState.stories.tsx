import * as React from 'react';
import NonIdealStates from './';
import { storiesOf } from '@storybook/react';

storiesOf('NonIdealStates', module).add('default', () => (
  <NonIdealStates>Click Me</NonIdealStates>
));
