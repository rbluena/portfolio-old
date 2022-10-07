import styled from 'styled-components';
import { Container } from '~/components/shared/styles';

export const Wrapper = styled(Container)`
  background-color: ${({ theme }) => theme.color.blue[900]};
  color: ${({ theme }) => theme.color.light[100]};
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
`;
