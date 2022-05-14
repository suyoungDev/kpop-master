import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ChatInput from './index';

export default {
  title: 'containers/ChatInput',
  components: ChatInput,
} as ComponentMeta<typeof ChatInput>;

const Template: ComponentStory<typeof ChatInput> = (): JSX.Element => (
  <ChatInput />
);

export const Default = Template.bind({});
Default.args = {};
