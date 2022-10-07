import styled, { css, DefaultTheme } from 'styled-components';
import Link from 'next/link';

type Colors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'light'
  | 'muted'
  | 'default';

interface FontInterface {
  theme: DefaultTheme;
  size?: keyof DefaultTheme['typography']['size'];
  variant?: Colors;
}

const dynamicFontColor = ({ theme, variant = 'default' }: FontInterface) => {
  if (variant === 'primary') {
    return css`
      color: ${theme.color.blue[900]};
    `;
  }

  if (variant === 'secondary') {
    return css`
      color: ${theme.color.green[300]};
    `;
  }

  if (variant === 'tertiary') {
    return css`
      color: ${theme.color.pink[700]};
    `;
  }

  if (variant === 'muted') {
    return css`
      color: ${theme.color.light[800]};
    `;
  }

  if (variant === 'light') {
    return css`
      color: ${theme.color.light[100]};
    `;
  }

  return css`
    color: ${theme.color.dark[900]};
  `;
};

const dynamicFontSize = ({ theme, size = 'base' }: FontInterface) => css`
  font-size: ${theme.typography.size[size]};
  line-height: ${parseFloat(theme.typography.size[size]) * 1.4}rem;
`;

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing.base};
  padding-right: ${({ theme }) => theme.spacing.base};

  @media ${({ theme }) => theme.mediaQuery.lg} {
    padding-left: ${({ theme }) => theme.spacing.xl};
    padding-right: ${({ theme }) => theme.spacing.xl};
    max-width: 1440px;
  }
`;

export const Text = styled.p`
  ${dynamicFontColor}
  ${dynamicFontSize}
`;

export const PageTitle = styled.h1`
  ${dynamicFontColor}
  ${dynamicFontSize}
`;

export const Heading = styled.h2`
  ${dynamicFontColor}
  ${dynamicFontSize}
`;

export const Subheading = styled.h3`
  ${dynamicFontColor}
  ${dynamicFontSize}
`;

export const Title = styled.h1`
  ${dynamicFontColor}
  ${dynamicFontSize}
`;

export const Paragraph = styled.p`
  ${dynamicFontColor}
  ${dynamicFontSize}
`;
