import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagInputs, { Props } from './index';

export default {
  title: 'foundation/TagInputs',
  components: TagInputs,
  parameters: {
    docs: {
      description: {
        component: `- input안에 글자를 입력하고 **엔터**를 누르면, **태그 컴포넌트**가 왼쪽에 추가된다. 
- _동일한 태그 내용_ 이라면, 추가되지 않는다.`,
      },
    },
  },
} as ComponentMeta<typeof TagInputs>;

const Template: ComponentStory<typeof TagInputs> = (args: Props) => {
  const [tags, setTags] = useState<string[]>(args.tags || []);
  return <TagInputs {...args} tags={tags} setTags={setTags} />;
};

export const Default = Template.bind({});
Default.args = {
  // ...
};

export const ManyTagsInput = Template.bind({});
ManyTagsInput.args = {
  tags: ['안녕!', 'hello', 'world!'],
};
