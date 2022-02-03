import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChattingTextArea, { Props } from './index';

export default {
  title: 'foundation/ChattingTextArea',
  components: ChattingTextArea,
} as ComponentMeta<typeof ChattingTextArea>;

const Template: ComponentStory<typeof ChattingTextArea> = (args: Props) => <ChattingTextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  // ...
};