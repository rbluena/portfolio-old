import styled from 'styled-components';
import { Container as ShareContainer } from '@app/components/shared/styles';

export const Wrapper = styled.nav`
  position: fixed;
  z-index: 3;
  width: 100%;
  background-color: ${({ theme }) => theme.color.blue[900]};
  box-shadow: ${'0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'};
  transition: all 400ms;
`;

export const Container = styled(ShareContainer)`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const ScrollProgress = styled.div`
  height: 8px;
  z-index: 15;
  width: 100%;
  position: absolute;
  background: ${({ theme }) => theme.color.blue[900]};
`;
