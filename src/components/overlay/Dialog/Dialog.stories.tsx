import * as React from 'react';
import Dialog from './';
import { storiesOf } from '@storybook/react';
import Button from '../../button/Button';

storiesOf('Overlay/Dialog', module).add('default', () => (
  <Dialog icon="inbox" isOpen title="Dialog header">
    <div className="pt-dialog-body">Some content</div>
    <div className="pt-dialog-footer">
      <div className="pt-dialog-footer-actions">
        <Button text="Secondary" />
        <Button text="Primary" />
      </div>
    </div>
  </Dialog>
));
