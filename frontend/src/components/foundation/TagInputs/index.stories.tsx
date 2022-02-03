import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagInputs, { Props } from './index';

export default {
  title: 'foundation/TagInputs',
  components: TagInputs,
} as ComponentMeta<typeof TagInputs>;

const Template: ComponentStory<typeof TagInputs> = (args: Props) => {
  const [tags, setTags] = useState<string[]>([]);
  return <TagInputs tags={tags} setTags={setTags} />;
};

export const Default = Template.bind({});
Default.args = {
  // ...
};
