import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  top: 0;
  display: flex;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  flex: 1.5;
  background-color: ${({ theme }) => theme.color.blue[900]};
  height: 100px;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    flex: 1;
  }
`;

export const RightContainer = styled.div`
  background-color: ${({ theme }) => theme.color.pink[700]};
  flex: 1;
  height: 100px;
`;
