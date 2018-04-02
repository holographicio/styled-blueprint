import * as React from 'react';
import RangeSlider from './';
import { storiesOf } from '@storybook/react';

storiesOf('RangeSlider', module).add('default', () => (
  <RangeSlider>Click Me</RangeSlider>
));
