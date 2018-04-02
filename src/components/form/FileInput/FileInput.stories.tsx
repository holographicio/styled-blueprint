import * as React from 'react';
import FileInput from './';
import { storiesOf } from '@storybook/react';

storiesOf('Form/FileInput', module).add('default', () => (
  <FileInput>Click Me</FileInput>
));
