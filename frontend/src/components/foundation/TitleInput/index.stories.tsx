import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TitleInput, { Props } from './index';

export default {
  title: 'foundation/TitleInput',
  components: TitleInput,
} as ComponentMeta<typeof TitleInput>;

const Template: ComponentStory<typeof TitleInput> = (args: Props) => <TitleInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  // ...
};