import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageTitle, { Props } from './index';

export default {
  title: 'foundation/PageTitle',
  components: PageTitle,
  parameters: {
    docs: {
      description: {
        component: 'h1 태그가 기본. 버튼으로 뭔가 할 수 있다.',
      },
    },
  },
  argTypes: {
    children: {
      description: '타이틀 내용',
    },
    buttonTitle: {
      description: 'button을 호버할 경우 나오는 title',
    },
  },
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args: Props) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '테스트',
  onButtonClick: () => {},
  buttonTitle: '테스트 버튼',
};
