import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TrackForm, { Props } from './index';
import useInput from '@HOOK/useInput';

export default {
  title: 'foundation/TrackForm',
  components: TrackForm,
} as ComponentMeta<typeof TrackForm>;

const Template: ComponentStory<typeof TrackForm> = (args: Props) => {
  return <TrackForm />;
};

export const Default = Template.bind({});
Default.args = {};
