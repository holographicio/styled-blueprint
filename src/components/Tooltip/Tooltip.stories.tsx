import * as React from 'react';
import Tooltip from './';
import { storiesOf } from '@storybook/react';

storiesOf('Tooltip', module).add('default', () => <Tooltip content="test" />);
