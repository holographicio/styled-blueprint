import * as React from 'react';
import Overlay from './';
import { storiesOf } from '@storybook/react';

storiesOf('Overlay/Overlay', module).add('default', () => (
  <Overlay isOpen>Click Me</Overlay>
));
