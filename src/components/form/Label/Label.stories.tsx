import * as React from 'react';
import Label from './';
import { storiesOf } from '@storybook/react';

storiesOf('Label', module).add('default', () => <Label text="test" />);
