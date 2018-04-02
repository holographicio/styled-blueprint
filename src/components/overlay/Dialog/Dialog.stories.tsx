import * as React from 'react';
import Dialog from './';
import { storiesOf } from '@storybook/react';

storiesOf('Dialog', module).add('default', () => (
  <Dialog isOpen>Click Me</Dialog>
));
