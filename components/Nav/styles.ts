import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background: ${({ theme }) => theme.color.light[100]};
  width: 100%;
  right: 0;
  top: 0;
  z-index: 10;

  @media ${({ theme }) => theme.mediaQuery.md} {
    max-width: 450px;
    height: 650px;
  }
`;
