import * as React from 'react';
import Navbar from './';
import { storiesOf } from '@storybook/react';

storiesOf('Navbar', module).add('default', () => <Navbar>Click Me</Navbar>);
