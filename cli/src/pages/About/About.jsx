import React from 'react';
import styled from 'styled-components';

import Center from '../../components/Center/Center';
import { FaGithubAlt } from 'react-icons/fa';
import { COLORS, SIZES, FONT } from '../../constants/theme';
import GameTitle from '../../components/GameTitle/GameTitle';
import EmailForm from './EmailForm/EmailForm';

const Content = styled.div`
  width: 90%;
  max-width: ${SIZES.gameLayoutWidth};
  color: black;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  line-height: 1.8rem;
  font-family: ${FONT.korean};
  font-weight: 200;
  margin-bottom: ${({ bottom }) => (bottom ? '2rem' : '')};

  a {
    width: 100%;
    display: flex;
    justify-content: center;

    margin-top: 1rem;
    color: ${COLORS.primary};

    :focus,
    :visited {
      color: ${COLORS.primary};
    }
  }
`;

const About = () => {
  return (
    <Center>
      <GameTitle about>mocha</GameTitle>
      <Content bottom>
        <p>안녕하세요! 재밋게 즐기셨나요? 😙</p>
        <p>문의사항이나 건의사항이 있다면 아래의 메일로 보내주세요.</p>
        <Content>
          <p>해당 프로젝트는 취업 용 포트폴리오입니다.</p>
          <p>만약 제 포트폴리오가 마음에 드셨다면, 연락 바랍니다!</p>
        </Content>
        <a
          href='https://github.com/mochapoke/kpop-master/'
          title='깃허브 페이지로 이동'
        >
          <FaGithubAlt size='1.5rem' />
        </a>
      </Content>
      <EmailForm />
    </Center>
  );
};

export default About;
