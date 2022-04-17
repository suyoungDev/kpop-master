import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { Props } from './index';

export default {
  title: 'foundation/Button',
  components: Button,
  argTypes: {
    label: {
      description: '버튼 안에 있는 텍스트',
    },
    disabled: {
      description: '버튼 눌러도 액션 안됨!',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: Props) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'default',
  disabled: true,
  onClick: () => console.log('hi'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'disabled',
  disabled: true,
  onClick: () => console.log('hi'),
};
