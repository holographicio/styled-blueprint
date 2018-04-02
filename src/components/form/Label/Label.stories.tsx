import * as React from 'react';
import Label from './';
import { storiesOf } from '@storybook/react';

storiesOf('Form/Label', module).add('default', () => <Label text="test" />);
