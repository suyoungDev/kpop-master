import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlayListPage from './index';

export default {
  title: 'page/PlayListPage',
  components: PlayListPage,
  parameters: {
    docs: {
      description: {
        component: `- 최소 10개의 input list가 주어짐. 최대 100개까지 추가 가능.
- 사용자가 추가하는 플레이리스트(게임에서 쓸 수 있음)`,
      },
    },
  },
} as ComponentMeta<typeof PlayListPage>;

const Template: ComponentStory<typeof PlayListPage> = () => <PlayListPage />;

export const Default = Template.bind({});
Default.args = {
  // ...
};
