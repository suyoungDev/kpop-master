import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  color: #2c2c2c;

  background: rgba(255, 255, 255, 0);
  background: linear-gradient(
    70deg,
    rgba(255, 255, 255, 0.075) 0%,
    rgba(246, 185, 185, 0.26) 100%
  );
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(14.5px);
  border: 1px solid rgba(255, 255, 255, 0.233);
`;

const Title = styled.button`
  width: 100%;
  height: 2rem;
  padding: 0 1rem;

  border: none;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-family: 'Nanum gothic';
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  background: transparent;
  background-image: linear-gradient(
    120deg,
    #ffb8b8 0%,
    rgba(251, 128, 165, 0.2) 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 0%;
  background-position: 100% 100%;
  transition: background-size 0.3s ease;

  &:hover {
    border: none;
    outline: none;
    background-size: 100% 100%;
  }

  &:focus {
    outline: none;
  }

  .accordion-icon {
    transition: transform 0.3s ease;
    margin-left: 4px;
  }

  .rotate {
    transform: rotate(90deg);
  }

  #icon {
    margin-right: 7px;
  }
`;

const Content = styled.div`
  width: 100%;
  overflow: hidden;
  font-family: 'Nanum gothic';
  font-weight: 200;
`;

const Accordion = ({ title, content }) => {
  const substance = useRef(null);
  const [isActivate, setIsActivate] = useState(false);
  const [tableHeight, setTableHeight] = useState('0rem');

  const toggleAccordion = () => {
    setIsActivate(!isActivate);
    setTableHeight(isActivate ? '0rem' : `${substance.current.scrollHeight}px`);
  };

  return (
    <Wrapper>
      <Title onClick={toggleAccordion}>
        {title}
        <FiChevronRight
          className={`${isActivate && 'rotate'} accordion-icon`}
          size='1.2rem'
        />
      </Title>
      <Content style={{ height: tableHeight }} ref={substance}>
        {content}
      </Content>
    </Wrapper>
  );
};

export default Accordion;
