import styled, { css, DefaultTheme } from 'styled-components';

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

const dynamyFontSize = ({ theme, size = 'base' }: FontInterface) => css`
  font-size: ${theme.typography.size[size]};
  line-height: ${parseFloat(theme.typography.size[size]) * 1.4}rem;
`;

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing.xxl};
  padding-right: ${({ theme }) => theme.spacing.xxl};
  max-width: 1440px;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    padding-left: ${({ theme }) => theme.spacing.base};
    padding-right: ${({ theme }) => theme.spacing.base};
  }
`;

export const PageTitle = styled.h1`
  ${dynamicFontColor}
  ${dynamyFontSize}
`;

export const Heading = styled.h2`
  ${dynamicFontColor}
  ${dynamyFontSize}
`;

export const Subheading = styled.h3`
  ${dynamicFontColor}
  ${dynamyFontSize}
`;

export const Title = styled.h1`
  ${dynamicFontColor}
  ${dynamyFontSize}
`;

export const Paragraph = styled.p`
  ${dynamicFontColor}
  ${dynamyFontSize}
`;
