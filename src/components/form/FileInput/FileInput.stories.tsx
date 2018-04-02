import * as React from 'react';
import FileInput from './';
import { storiesOf } from '@storybook/react';

storiesOf('FileInput', module).add('default', () => (
  <FileInput>Click Me</FileInput>
));
