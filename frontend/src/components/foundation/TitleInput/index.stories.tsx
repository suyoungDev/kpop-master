import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TitleInput, { Props } from './index';

export default {
  title: 'foundation/TitleInput',
  components: TitleInput,
  parameters: {
    docs: {
      description: {
        component: 'default는 h2 태그이지만, 수정 시 Input 컴포넌트가 됨.',
      },
    },
  },
} as ComponentMeta<typeof TitleInput>;

const Template: ComponentStory<typeof TitleInput> = (args: Props) => <TitleInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  // ...
};
