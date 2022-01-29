import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { Props } from './index';

export default {
  title: 'foundation/Button',
  components: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: Props) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'default',
  disabled: true,
};
