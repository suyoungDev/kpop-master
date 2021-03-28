import React, { useRef, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Content, Wrapper, Title } from './Accordion.styles';

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
