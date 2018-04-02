import * as React from 'react';
import List from './';
import { storiesOf } from '@storybook/react';
import ListItem from '../ListItem';

storiesOf('List', module)
  .add('unordered', () => (
    <List>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
    </List>
  ))
  .add('ordered', () => (
    <List ordered>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
    </List>
  ))
  .add('unstyled', () => (
    <List unstyled>
      <ListItem>test</ListItem>
      <ListItem>test</ListItem>
    </List>
  ));
