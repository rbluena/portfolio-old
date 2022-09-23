import styled from 'styled-components';

export const Wrapper = styled.header`
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  z-index: 1;
  top: 0;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQuery.lg} {
    /* position: absolute; */
    flex-direction: row;
  }
`;

export const LeftContainer = styled.section`
  flex: 1.5;
  background-color: ${({ theme }) => theme.color.blue[900]};
  color: white;
  padding-top: ${({ theme }) => theme.spacing.xxxl};

  @media ${({ theme }) => theme.mediaQuery.lg} {
    /* padding-left: ${({ theme }) => theme.spacing.xxl}; */
    flex: 2;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
  }
`;

export const RightContainer = styled.section`
  background-color: ${({ theme }) => theme.color.pink[700]};
  min-height: 100vh;
  height: 100px;
  padding-top: ${({ theme }) => theme.spacing.xxxl};

  @media ${({ theme }) => theme.mediaQuery.lg} {
    padding-right: ${({ theme }) => theme.spacing.xxl};
    padding-left: ${({ theme }) => theme.spacing.lg};
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
    flex: 1;
  }
`;

export const Social = styled.div`
  display: flex;
`;
