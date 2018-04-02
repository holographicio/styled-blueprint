import * as React from 'react';
import Alert from './';
import { storiesOf } from '@storybook/react';

storiesOf('Alert', module).add('default', () => <Alert isOpen>Click Me</Alert>);
