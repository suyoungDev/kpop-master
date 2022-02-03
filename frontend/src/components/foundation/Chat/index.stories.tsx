import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chat, { Props } from './index';

export default {
  title: 'foundation/Chat',
  components: Chat,
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args: Props) => <Chat {...args} />;

export const Default = Template.bind({});
Default.args = {
  userName: 'test',
  message: 'is it working?',
  isReceived: true,
};
