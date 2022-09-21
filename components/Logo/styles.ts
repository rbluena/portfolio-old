import styled from 'styled-components';

export const Wrapper = styled.div`
  svg {
    fill: ${({ theme }) => theme.color.green[300]};
    width: 48;
    height: 48;
  }
`;
