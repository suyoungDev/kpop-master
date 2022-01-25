---
to: src/components/foundation/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
import React from 'react';
import * as S from './styles';

export interface Props {
  //...
}

const <%= h.changeCase.pascalCase(name) %> = ({}:Props): JSX.Element => {
  return (
    <S.Wrapper>
      <%= h.changeCase.pascalCase(name) %> Foundation
    </S.Wrapper>
  )
};

export default <%= h.changeCase.pascalCase(name) %>;