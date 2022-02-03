import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagInputs, { Props } from './index';

export default {
  title: 'foundation/TagInputs',
  components: TagInputs,
} as ComponentMeta<typeof TagInputs>;

const Template: ComponentStory<typeof TagInputs> = (args: Props) => <TagInputs {...args} />;

export const Default = Template.bind({});
Default.args = {
  // ...
};