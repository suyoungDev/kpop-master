import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlayListPage from './index';

export default {
  title: 'page/PlayListPage',
  components: PlayListPage,
} as ComponentMeta<typeof PlayListPage>;

const Template: ComponentStory<typeof PlayListPage> = () => <PlayListPage />;

export const Default = Template.bind({});
Default.args = {
  // ...
};
