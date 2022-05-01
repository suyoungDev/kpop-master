import React, { ChangeEvent } from 'react';
import Input, { Props as InputProps } from '../../foundations/Input';
import type { SongInfo } from '../../types/playlist';

type Option = Pick<InputProps, 'label' | 'placeholder'> & {
  key: keyof SongInfo;
};
const playlistOptions: Readonly<Option[]> = [
  {
    label: '타이틀',
    placeholder: '노래 제목을 정확히 입력해주세요.',
    key: 'title',
  },
  {
    label: '아티스트',
    placeholder: '아티스트 이름을 정확히 입력해주세요.',
    key: 'artist',
  },
];

type Props = {
  value: SongInfo;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const PlaylistInputs = ({ value, onChange }: Props): JSX.Element => {
  return (
    <li>
      <div>
        {playlistOptions.map(({ key, ...option }, idx) => (
          <Input
            key={key}
            name={key}
            {...option}
            onChange={onChange}
            value={value[key]}
          />
        ))}
      </div>
    </li>
  );
};

export default PlaylistInputs;
