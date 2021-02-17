import styled from 'styled-components';
import { COLORS } from '../../../../constants/theme';

const SavingInputcontainer = styled.form`
  .name-input-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 1rem;
    margin-left: 1.3rem;

    input {
      width: 60%;
      max-width: 14rem;
      height: 2rem;
      padding-left: 8px;
      border: none;
      border-radius: 0;
      line-height: 70px;
      background-color: transparent;
      color: black;
      font-size: 20px;
      outline: none;
      border-bottom: 3px solid rgba(0, 0, 0, 0.6);
      font-family: 'Montserrat', sans-serif;

      :focus {
        border-bottom: 3px solid black;
      }
    }

    ::placeholder {
      padding: 10px;
    }

    button {
      width: 5rem;
      height: 2rem;
      border: none;
      background: ${COLORS.primaryDark};
      color: white;
      letter-spacing: 2px;
      border-radius: 6px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: #363a42;
        transform: scale(0.95);
      }
      &:active {
        outline: none;
        border: none;
      }
    }
  }
`;

export default SavingInputcontainer;
