import * as React from 'react';
import TagInput from './';
import { storiesOf } from '@storybook/react';

storiesOf('Form/TagInput', module).add('default', () => (
  <TagInput values={['test']} />
));
