import React from 'react';
import { AppRegistry } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './rn-addons';

import Home from '../src/page/Home';

addDecorator(withKnobs);

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  port: 7007,
  onDeviceUI: true,
  asyncStorage: AsyncStorage
});

const StoryBookRoot = () => {
  return <StorybookUIRoot />
}

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default console.tron.storybookSwitcher(StoryBookRoot)(Home);
