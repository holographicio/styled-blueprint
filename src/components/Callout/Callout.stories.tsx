import * as React from 'react';
import Callout from './';
import { storiesOf } from '@storybook/react';

storiesOf('Callout', module)
  .add('default', () => (
    <Callout>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
    </Callout>
  ))
  .add('title', () => (
    <Callout title="Callout Heading">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
    </Callout>
  ))
  .add('icon', () => (
    <Callout icon="info-sign" title="Callout Heading">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
    </Callout>
  ));
