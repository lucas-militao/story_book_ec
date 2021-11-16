import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { text, radios, boolean } from '@storybook/addon-knobs';

import Container from '../decorators/container';
import { Label } from '../../src/components';

const label = 'Title Theme';
const valuesObj = {
  Primary: 'primary',
  Secondary: 'secondary'
};
const defaultValue = 'primary';
const optionsObj = {
  display: 'inline-radio',
};

storiesOf('Components/Label')
  .addDecorator(Container)
  .add('Title', () => 
  <Label
    bold 
    size="large"
    color={radios(label, valuesObj, defaultValue)}
  >
    {text('Content', 'Experts Club')}
  </Label>
)
  .add('Text', () => 
  <Label 
    color="muted"
    color={radios(label, valuesObj, defaultValue)}
    size="small"
    bold={boolean('Title bold', true)}
  >
    {text('Content', 'Experts Club')}
  </Label>
)