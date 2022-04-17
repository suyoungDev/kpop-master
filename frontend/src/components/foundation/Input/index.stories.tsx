import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { Props } from './index';
import useInput from '@HOOK/useInput';

export default {
  title: 'foundation/Input',
  components: Input,
  parameters: {
    docs: {
      description: {
        component: '기본 인풋',
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: Props) => {
  const { input: value, onChange: setValue } = useInput('');
  return <Input {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const UnderLine = Template.bind({});
UnderLine.args = {
  variant: 'underLine',
};
