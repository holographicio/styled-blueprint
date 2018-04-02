import * as React from 'react';
import MenuItem from './';
import { storiesOf } from '@storybook/react';

storiesOf('MenuItem', module).add('default', () => <MenuItem text="test" />);
