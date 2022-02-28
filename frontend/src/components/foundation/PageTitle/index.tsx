import React from 'react';
import { BsFillPatchPlusFill } from 'react-icons/bs';
import IconButton from '@F/IconButton';
import * as S from './styles';

export interface Props {
  children: React.ReactNode;
  onButtonClick: () => void;
  buttonTitle: string;
}

const PageTitle = ({ children, onButtonClick, buttonTitle }: Props): JSX.Element => {
  return (
    <S.Wrapper>
      <h1>{children}</h1>
      <IconButton onClick={onButtonClick} title={buttonTitle}>
        <BsFillPatchPlusFill size={'1.3rem'} />
      </IconButton>
    </S.Wrapper>
  );
};

export default PageTitle;
