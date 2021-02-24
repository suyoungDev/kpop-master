import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS, FONT } from '../../constants/theme';

const shrinkStyle = css`
  top: -14px;
  font-size: 12px;
  color: ${COLORS.contentGrayLight};
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  top: 10px;
  left: 5px;
  transition: all 0.3s ease;
  font-family: ${FONT.korean};

  &.shrink {
    ${shrinkStyle}
  }
`;
const Group = styled.div`
  position: relative;
  margin: 45px 0;

  :hover {
    ${Label} {
      ${shrinkStyle}
    }
  }
`;

const Input = styled.input`
  background: none;
  background-color: white;
  color: ${COLORS.contentGray};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${COLORS.contentGrayLight};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <Group>
      <Input onChange={handleChange} {...props} />

      {label ? (
        <Label className={`${props.value.length ? 'shrink' : ''}`}>
          {label}
        </Label>
      ) : null}
    </Group>
  );
};

export default FormInput;
