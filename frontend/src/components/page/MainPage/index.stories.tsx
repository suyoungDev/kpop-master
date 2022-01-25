import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage, { Props } from './index';

export default {
  title: 'page/MainPage',
  components: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args: Props) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // ...
};