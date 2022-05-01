import React from 'react';
import Input from '@F/Input';

export type Props = {
  values: TrackInfo;
  setValues: (e: React.ChangeEvent<unknown>) => void;
};

const InputModule = ({ values, setValues }: Props): JSX.Element => {
  const { trackName, artistName } = values;

  const TRACK_INPUTS_FORM: PlaylistInputFields[] = [
    {
      id: 'artistName',
      placeholder: '가수 이름',
      label: '가수 이름',
      value: artistName,
      required: true,
    },
    {
      id: 'trackName',
      placeholder: '노래 제목',
      label: '노래 제목',
      value: trackName,
      required: true,
    },
  ];

  return (
    <>
      {TRACK_INPUTS_FORM.map(trackInput => (
        <div key={trackInput.id}>
          <Input {...trackInput} onChange={setValues} />
        </div>
      ))}
    </>
  );
};

export default InputModule;
