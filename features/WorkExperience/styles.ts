import styled from 'styled-components';
import { Text } from '@app/components/shared/styles';
import { TabProps } from './types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.base};

  @media ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg} 0px;
  color: white;

  @media ${({ theme }) => theme.mediaQuery.lg} {
    margin-left: ${({ theme }) => theme.spacing.xxl};
    padding: 0px;
  }
`;

export const Description = styled(Text)`
  padding: ${({ theme }) => theme.spacing.base} 0px;
  /* max-width: 600px; */
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

Tabs.Nav = styled.li<TabProps>`
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

    &:hover::after {
      width: 100%;
    }
  }
`;
