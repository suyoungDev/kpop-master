---
to: src/components/page/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
import React from 'react';
import * as S from './styles';

const <%= h.changeCase.pascalCase(name) %> = (): JSX.Element => {
  return (
    <S.Wrapper>
      <%= h.changeCase.pascalCase(name) %> Page
    </S.Wrapper>
  )
};

export default <%= h.changeCase.pascalCase(name) %>;