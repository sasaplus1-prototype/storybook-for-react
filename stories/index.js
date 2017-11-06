import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('normal', function() {
    return (
      <button onClick={action('clicked')}></button>
    )
  })
  .add('with caption', function() {
    return (
      <button onClick={action('clicked')}>Caption</button>
    )
  });
