import styled from 'styled-components';
import { Container } from '../shared/styles';

export const Wrapper = styled.section`
  padding-bottom: ${({ theme }) => theme.spacing.xxxl};
`;

export const Divider = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.color.pink[700]};
  height: 8px;
  width: ${({ theme }) => theme.spacing.xxl};
  margin: ${({ theme }) => theme.spacing.base} 0px;
`;

export const ContentWrapper = styled(Container)`
  border-bottom: 1px solid ${({ theme }) => theme.color.blue[900]};
`;
