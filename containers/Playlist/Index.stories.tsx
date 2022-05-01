import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TrackForm from './Playlist';

export default {
  title: 'containers/TrackForm',
  components: TrackForm,
} as ComponentMeta<typeof TrackForm>;

const Template: ComponentStory<typeof TrackForm> = args => {
  return <TrackForm />;
};

export const Default = Template.bind({});
Default.args = {};
