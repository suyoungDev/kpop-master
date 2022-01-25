wwwww---
to: src/components/container/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
import React from 'react';
import * as S from './styles';

export interface Props {
  //...
}

const <%= h.changeCase.pascalCase(name) %> = ({}:Props): JSX.Element => {
  return (
    <S.Wrapper>
      <%= h.changeCase.pascalCase(name) %> Container
    </S.Wrapper>
  )
};

export default <%= h.changeCase.pascalCase(name) %>;