import * as React from 'react';
import Tag from './';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

storiesOf('Tag', module)
  .add('default', () => <Tag onClick={action('onClick')}>Done</Tag>)
  .add('remove', () => (
    <Tag onClick={action('onClick')} onRemove={action('onRemove')}>
      Done
    </Tag>
  ))
  .add('active', () => (
    <Tag active onClick={action('onClick')}>
      Done
    </Tag>
  ))
  .add('interactive', () => (
    <Tag interactive onClick={action('onClick')}>
      Done
    </Tag>
  ))
  .add('large', () => <Tag onClick={action('onClick')}>Done</Tag>)
  .add('round', () => <Tag onClick={action('onClick')}>Done</Tag>);
