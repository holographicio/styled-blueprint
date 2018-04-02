import * as React from 'react';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from './';
import { storiesOf } from '@storybook/react';

storiesOf('Typography/Headings', module)
  .add('Heading1', () => <Heading1>Heading</Heading1>)
  .add('Heading2', () => <Heading2>Heading</Heading2>)
  .add('Heading3', () => <Heading3>Heading</Heading3>)
  .add('Heading4', () => <Heading4>Heading</Heading4>)
  .add('Heading5', () => <Heading5>Heading</Heading5>);
