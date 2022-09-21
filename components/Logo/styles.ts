import styled from 'styled-components';

export const Wrapper = styled.div`
  svg {
    fill: ${({ theme }) => theme.color.blue[900]};
    width: 48;
    height: 48;
  }
`;
