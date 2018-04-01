import * as React from 'react';
import Breadcrumb from './';
import { storiesOf } from '@storybook/react';

storiesOf('Breadcrumb', module).add('default', () => (
  <Breadcrumb>
    <ul>
      <li>Test</li>
    </ul>
  </Breadcrumb>
));
