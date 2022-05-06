import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Playlist from './';

export default {
  title: 'containers/Playlist',
  components: Playlist,
} as ComponentMeta<typeof Playlist>;

const Template: ComponentStory<typeof Playlist> = () => <Playlist />;

export const Default = Template.bind({});
Default.args = {};
