import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TrackForm, { Props } from './index';
import useInputs from '@HOOK/useInputs';
import { TrackInfo } from '@TS/track';

export default {
  title: 'foundation/TrackForm',
  components: TrackForm,
} as ComponentMeta<typeof TrackForm>;

const FORM: TrackInfo = { trackName: '', artistName: '', videoId: '' };

const Template: ComponentStory<typeof TrackForm> = (args: Props) => {
  const { inputs, onChange } = useInputs<TrackInfo>([FORM], FORM);

  return (
    <div>
      {inputs.map((input, idx) => (
        <TrackForm values={input} setValues={onChange(idx)} key={idx} />
      ))}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
