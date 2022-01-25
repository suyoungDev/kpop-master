---
to: src/components/foundation/<%= h.changeCase.pascalCase(name) %>/index.stories.tsx
---
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import <%= h.changeCase.pascalCase(name) %>, { Props } from './index';

export default {
  title: 'foundation/<%= h.changeCase.pascalCase(name) %>',
  components: <%= h.changeCase.pascalCase(name) %>,
} as ComponentMeta<typeof <%= h.changeCase.pascalCase(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascalCase(name) %>> = (args: Props) => <<%= h.changeCase.pascalCase(name) %> {...args} />;

export const Default = Template.bind({});
Default.args = {
  // ...
};