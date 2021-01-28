import React from 'react';
import styled from 'styled-components';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

const Log = styled.p`
  margin-top: ${SIZES.base}px;
  color: ${COLORS.darkGray};
  font-family: ${FONTS.engBody};
  font-size: ${SIZES.font}px;
`;

const Logging = ({ answer }) => {
  return <Log>{answer}</Log>;
};

export default Logging;
