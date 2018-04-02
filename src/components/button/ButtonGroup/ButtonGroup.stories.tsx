import * as React from 'react';
import ButtonGroup from './';
import { storiesOf } from '@storybook/react';
import Button from '../Button';

storiesOf('Button/ButtonGroup', module).add('default', () => (
  <ButtonGroup>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </ButtonGroup>
));
