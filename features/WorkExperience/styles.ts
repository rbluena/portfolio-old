import styled from 'styled-components';
import { TabProps } from './types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: row;
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  // padding: ${({ theme }) => theme.spacing.lg} 0px;
  color: white;

  @media ${({ theme }) => theme.mediaQuery.lg} {
    margin-left: ${({ theme }) => theme.spacing.xxl};
    padding: 0px;
  }
`;

export const Description = styled.ul`
  padding: ${({ theme }) => theme.spacing.base} 0px;

  li {
    list-type-style: disc;
    line-height: 2.2em;
  }
`;

export const SubheadingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  .divider {
    display: none;
  }

  @media ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: row;
    align-items: center;

    .divider {
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: gray;
    }
  }
`;

export const Tabs: any = {};

Tabs.Content = styled.div<TabProps>`
  display: ${(props) => (props?.isActive ? 'block' : 'none')};
`;

Tabs.List = styled.ul`
  padding: 8px 0px;
  list-style: none;
  display: flex;
  gap: 12px;
  overflow: auto;
  white-space: nowrap;

  @media ${({ theme }) => theme.mediaQuery.md} {
    min-width: 200px;
    flex-direction: column;
  }
`;

Tabs.NavItem = styled.li<TabProps>`
  &:focus {
    outline-color: red;
    outline-width: 2px;
  }

  button {
    background: transparent;
    outline: none;
    border: 0px;
    cursor: pointer;
    font-size: ${({ theme }) => theme.typography.size.sm};
    color: ${({ theme }) => theme.color.light[800]};
    color: ${({ isActive, theme }) => isActive && theme.color.pink[700]};
    font-weight: ${({ isActive }) => isActive && 'bold'};

    &::after {
      content: '';
      display: block;
      height: 2px;
      background-color: ${({ theme }) => theme.color.blue[900]};
      width: ${({ isActive }) => (isActive ? '100%' : '0%')};
      transition: all 400ms;
      margin-top: 4px;
    }

    &:hover {
      color: ${({ theme }) => theme.color.pink[700]};
      font-weight: bold;
    }

    &:hover::after,
    &:focus::after {
      width: 100%;
    }
  }
`;
