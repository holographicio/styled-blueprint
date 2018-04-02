import * as React from 'react';
import Alert from './';
import { storiesOf } from '@storybook/react';

storiesOf('Overlay/Alert', module).add('default', () => (
  <Alert isOpen>Click Me</Alert>
));
