import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag, { Props } from './index';

export default {
  title: 'foundation/Tag',
  components: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args: Props) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'test',
};
