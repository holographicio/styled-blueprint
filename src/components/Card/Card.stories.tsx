import * as React from 'react';
import Card from './';
import { storiesOf } from '@storybook/react';

storiesOf('Card', module).add('default', () => <Card>Click Me</Card>);
