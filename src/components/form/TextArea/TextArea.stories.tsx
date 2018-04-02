import * as React from 'react';
import TextArea from './';
import { storiesOf } from '@storybook/react';

storiesOf('Form/TextArea', module).add('default', () => (
  <TextArea>Click Me</TextArea>
));
