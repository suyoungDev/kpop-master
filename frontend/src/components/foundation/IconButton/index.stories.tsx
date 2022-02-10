import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton, { Props } from './index';
import { BsFillPatchPlusFill } from 'react-icons/bs';

export default {
  title: 'foundation/IconButton',
  components: IconButton,
  parameters: {
    docs: {
      description: {
        component: '**아이콘svg컴포넌트**를 children으로 사용하는 버튼. 이후 color property추가 예정',
      },
    },
  },
  argTypes: {
    children: {
      description: 'icon component',
      control: {
        type: null,
      },
    },
    onClick: {
      description: 'handle function',
      control: {
        type: null,
      },
    },
    title: {
      description: '버튼 호버 시 나오는 팝업설명',
      defaultValue: 'undefined',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args: Props) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <BsFillPatchPlusFill size={'1.3rem'} title="안녕!" />,
};
