import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatRoom, { Props } from './index';

export default {
  title: 'component/ChatRoom',
  components: ChatRoom,
} as ComponentMeta<typeof ChatRoom>;

const Template: ComponentStory<typeof ChatRoom> = (args: Props) => <ChatRoom {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => {},
};
