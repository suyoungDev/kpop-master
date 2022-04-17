---
to: src/components/page/<%= h.changeCase.pascalCase(name) %>/index.stories.tsx
---
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import <%= h.changeCase.pascalCase(name) %> from './index';

export default {
  title: 'page/<%= h.changeCase.pascalCase(name) %>',
  components: <%= h.changeCase.pascalCase(name) %>,
} as ComponentMeta<typeof <%= h.changeCase.pascalCase(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascalCase(name) %>> = () => <<%= h.changeCase.pascalCase(name) %> />;

export const Default = Template.bind({});
Default.args = {
  // ...
};