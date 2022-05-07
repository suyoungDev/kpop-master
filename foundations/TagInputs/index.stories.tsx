import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TagInputs from './';

export default {
  title: 'containers/TagInputs',
  components: TagInputs,
} as ComponentMeta<typeof TagInputs>;

const Template: ComponentStory<typeof TagInputs> = () => <TagInputs />;

export const Default = Template.bind({});
Default.args = {};
