import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GamePage, { Props } from './index';

export default {
  title: 'page/GamePage',
  components: GamePage,
} as ComponentMeta<typeof GamePage>;

const Template: ComponentStory<typeof GamePage> = (args: Props) => <GamePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  // ...
};