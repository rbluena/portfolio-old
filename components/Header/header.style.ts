import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.bgPrimary};
`;

export const Container = styled.div``;

export const Title = styled.h1`
  stroke: 1px solid ${({ theme }) => theme.color.textPrimary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const Heading = styled.h3``;

export const Social = styled.div``;
