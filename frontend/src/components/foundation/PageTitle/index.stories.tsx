import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PageTitle, { Props } from './index';

export default {
  title: 'foundation/PageTitle',
  components: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args: Props) => (
  <PageTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: '테스트',
  onButtonClick: () => {},
  buttonTitle: '테스트 버튼',
};
