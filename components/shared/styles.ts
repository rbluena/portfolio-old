import styled from 'styled-components';

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing.xxl};
  padding-right: ${({ theme }) => theme.spacing.xxl};
  max-width: 1440px;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    padding-left: ${({ theme }) => theme.spacing.base};
    padding-right: ${({ theme }) => theme.spacing.base};
  }
`;
