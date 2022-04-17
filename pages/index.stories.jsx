import React from 'react';
import Page from './index';

export default {
  title: 'Example/home',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = args => <Page {...args} />;

export const Default = Template.bind({});
