import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlayListPage, { Props } from './index';

export default {
  title: 'page/PlayListPage',
  components: PlayListPage,
} as ComponentMeta<typeof PlayListPage>;

const Template: ComponentStory<typeof PlayListPage> = (args: Props) => <PlayListPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // ...
};