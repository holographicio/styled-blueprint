import * as React from 'react';
import Card from './';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

storiesOf('Card', module)
  .add('default', () => (
    <Card onClick={action('onClick')}>
      <h5>
        <a href="#">Card header</a>
      </h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
      </p>
    </Card>
  ))
  .add('elevation 1', () => (
    <Card onClick={action('onClick')} elevation={1}>
      <h5>
        <a href="#">Card header</a>
      </h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
      </p>
    </Card>
  ))
  .add('elevation 2', () => (
    <Card onClick={action('onClick')} elevation={2}>
      <h5>
        <a href="#">Card header</a>
      </h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
      </p>
    </Card>
  ))
  .add('elevation 3', () => (
    <Card onClick={action('onClick')} elevation={3}>
      <h5>
        <a href="#">Card header</a>
      </h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
      </p>
    </Card>
  ))
  .add('elevation 4', () => (
    <Card onClick={action('onClick')} elevation={4}>
      <h5>
        <a href="#">Card header</a>
      </h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
      </p>
    </Card>
  ))
  .add('interactive', () => (
    <Card onClick={action('onClick')} interactive>
      <h5>
        <a href="#">Card header</a>
      </h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
      </p>
    </Card>
  ));
