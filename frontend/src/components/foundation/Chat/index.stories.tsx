import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chat, { Props } from './index';

export default {
  title: 'foundation/Chat',
  components: Chat,
  parameters: {
    docs: {
      description: {
        component: '대화 컴포넌트',
      },
    },
  },
  argTypes: {
    userName: {
      description: 'userColor props을 받아서 유저마다 다른 폰트색상으로 구현한다.',
    },
    isReceived: {
      description:
        '텍스트의 좌우 정렬기준. 본인이 받는 메세지(isReceived = true)일 경우 왼쪽 정렬이고, 본인이 보내는 메세지일 경우 오른쪽 정렬임.',
    },
    message: {
      description: '유저가 보내고 받은 메세지. string타입만 가능. 이모지도 추후에 넣어볼 계획.',
    },
  },
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args: Props) => <Chat {...args} />;

export const Receiving = Template.bind({});
Receiving.args = {
  userName: 'test',
  message: 'hello world!',
  isReceived: true,
};

export const Sending = Template.bind({});
Sending.args = {
  message: `I'm sending a message :-)`,
  isReceived: false,
};
