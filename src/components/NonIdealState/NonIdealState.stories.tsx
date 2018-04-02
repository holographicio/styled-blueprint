import * as React from 'react';
import NonIdealStates from './';
import { storiesOf } from '@storybook/react';

storiesOf('NonIdealStates', module).add('default', () => (
  <NonIdealStates
    description="Create a new file to populate the folder."
    title="This folder is empty"
    visual="folder-open"
  />
));
