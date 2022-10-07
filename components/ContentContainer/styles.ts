import styled from 'styled-components';
import { Container } from '../shared/styles';

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing.lg} 0;

  @media ${({ theme }) => theme.mediaQuery.md} {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
`;

export const Divider = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.color.pink[700]};
  height: 8px;
  width: ${({ theme }) => theme.spacing.xxl};
  margin: ${({ theme }) => theme.spacing.base} 0px;
`;

export const ContentWrapper = styled(Container)``;
