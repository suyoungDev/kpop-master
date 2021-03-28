import styled from 'styled-components';

const SavingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    display: flex;
    font-weight: bold;
    font-size: 20px;

    #icon {
      margin-right: 7px;
    }
  }
  span {
    padding-left: 1.5rem;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
    margin-top: 0.5rem;
  }
`;

export default SavingWrapper;
