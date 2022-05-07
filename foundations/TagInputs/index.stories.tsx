import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import TagInputs, { Props } from './';

export default {
  title: 'containers/TagInputs',
  components: TagInputs,
} as ComponentMeta<typeof TagInputs>;

const Template: ComponentStory<typeof TagInputs> = (args: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  return <TagInputs {...args} tags={tags} setTags={setTags} />;
};

export const Default = Template.bind({});
Default.args = {};
