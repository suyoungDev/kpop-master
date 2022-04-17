import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage from './index';

export default {
  title: 'page/MainPage',
  components: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Default = Template.bind({});
Default.args = {
  // ...
};
