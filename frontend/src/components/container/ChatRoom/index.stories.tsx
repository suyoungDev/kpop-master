import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatRoom, { Props } from './index';

export default {
  title: 'component/ChatRoom',
  components: ChatRoom,
  argTypes: {
    onSubmit: {
      description: 'api전송과 버튼의 라벨을 랜덤하게 바꾼다.',
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof ChatRoom>;

const Template: ComponentStory<typeof ChatRoom> = (args: Props) => <ChatRoom {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: () => {},
};
