import * as React from 'react';
import Toast from './';
import { storiesOf } from '@storybook/react';

storiesOf('Toast/Toast', module).add('default', () => <Toast message="Test" />);
