import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  display: flex;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.section`
  flex: 1.5;
  background-color: ${({ theme }) => theme.color.blue[900]};
  padding-left: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xxxl};
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
  @media ${({ theme }) => theme.mediaQuery.sm} {
    flex: 1;
  }
`;

export const RightContainer = styled.section`
  background-color: ${({ theme }) => theme.color.pink[700]};
  padding-right: ${({ theme }) => theme.spacing.xxl};
  padding-left: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.xxxl};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  min-height: 100vh;
  flex: 1;
  height: 100px;
`;
