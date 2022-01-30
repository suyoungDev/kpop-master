---
to: src/components/container/<%= h.changeCase.pascalCase(name) %>/index.stories.tsx
---
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import <%= h.changeCase.pascalCase(name) %>, { Props } from './index';

export default {
  title: 'component/<%= h.changeCase.pascalCase(name) %>',
  components: <%= h.changeCase.pascalCase(name) %>,
} as ComponentMeta<typeof <%= h.changeCase.pascalCase(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascalCase(name) %>> = (args: Props) => <<%= h.changeCase.pascalCase(name) %> {...args} />;

export const Default = Template.bind({});
Default.args = {
  // ...
};