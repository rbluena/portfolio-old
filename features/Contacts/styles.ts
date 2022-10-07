import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const DirectContacts = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: flex;
    width: fit-content;
    gap: 0.1em;
    margin: 0.5em 0;
    align-items: center;
    text-overflow: ellipsis;
  }
`;

export const Social = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: ${(props) => props.theme.spacing.base};

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      color: ${({ theme }) => theme.color.pink[700]};
      font-weight: bold;
      text-decoration: none;
    }

    @media ${({ theme }) => theme.mediaQuery.md} {
      flex-direction: row;
    }
  }
`;
