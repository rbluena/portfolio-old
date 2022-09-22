import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  outline: none;
  border: 0;
  background: transparent;
  padding: 0.5rem;
  cursor: pointer;
  align-items: flex-end;

  span {
    display: block;
    height: 4px;
    width: 50px;
    background-color: black;

    &:last-child {
      width: 35px;
    }
  }
`;
