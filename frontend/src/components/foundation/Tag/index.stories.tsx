import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag, { Props } from './index';

export default {
  title: 'foundation/Tag',
  components: Tag,
  parameters: {
    docs: {
      description: {
        component: '_TagInputs_컴포넌트에 쓰이는 태그 컴포넌트',
      },
    },
  },
  argTypes: {
    deleteTag: {
      description: '해당 태그를 삭제함',
      control: { type: null },
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args: Props) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'test',
};
