import styled from 'styled-components';
import { Container as ShareContainer } from '@app/components/shared/styles';

export const Wrapper = styled.nav``;

export const Container = styled(ShareContainer)`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
