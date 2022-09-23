import styled from 'styled-components';
import { Text } from '@app/components/shared/styles';
import { TabProps } from './types';

export const Wrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const ContentWrapper = styled.div``;

export const Description = styled(Text)`
  padding: ${({ theme }) => theme.spacing.base} 0px;
  max-width: 600px;
`;

export const Tabs: any = {};

Tabs.Content = styled.div<TabProps>`
  display: ${(props) => (props?.isActive ? 'block' : 'none')};
`;

Tabs.List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 200px;
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
