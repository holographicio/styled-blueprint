import * as React from 'react';
import Toast from './';
import { storiesOf } from '@storybook/react';

storiesOf('Toast', module).add('default', () => <Toast message="Test" />);
