import * as React from 'react';
import Breadcrumb from './';
import { storiesOf } from '@storybook/react';

storiesOf('Breadcrumb', module).add('default', () => (
  <ul className="pt-breadcrumbs">
    <li>
      <Breadcrumb>Test</Breadcrumb>
    </li>
  </ul>
));
