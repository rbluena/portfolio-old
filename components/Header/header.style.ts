import styled from 'styled-components';
import { Container } from '@app/components/shared/styles';

export const Wrapper = styled.header`
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
`;

export const Hero = styled.div`
  width: 100%;
  z-index: 1;
  top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media ${({ theme }) => theme.mediaQuery.lg} {
    display: flex;
    min-height: 100vh;
  }
`;

export const LeftContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.blue[900]};
  padding-top: ${({ theme }) => theme.spacing.xxxl};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
  color: white;

  @media ${({ theme }) => theme.mediaQuery.lg} {
    padding-right: 2em;
    flex: 1.5;
    clip-path: polygon(0 0, 100% 0, 100% 87%, 0% 100%);
  }
`;

export const RightContainer = styled(Container)`
  background-color: ${({ theme }) => theme.color.pink[700]};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.xxl};

  @media ${({ theme }) => theme.mediaQuery.lg} {
    flex: 1;
    padding-top: ${({ theme }) => theme.spacing.xxxl};
    padding-left: 2em;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 87%);
  }
`;

export const DescriptionWrapper = styled.div`
  padding-top: 3em;
`;

export const Social = styled.div`
  display: flex;
`;
