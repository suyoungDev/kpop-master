import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton, { Props } from './index';
import { BsFillPatchPlusFill } from 'react-icons/bs';

export default {
  title: 'foundation/IconButton',
  components: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args: Props) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <BsFillPatchPlusFill size={'1.3rem'} />,
};
