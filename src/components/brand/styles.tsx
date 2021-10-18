import styled, { css } from 'styled-components';

export interface IconProps {
  variant?: 'primary' | 'secondary';
}

export interface TextProps {
  variant?: 'primary' | 'secondary';
}

const getIconVariantStyle = ({ variant = 'primary' }: IconProps) => ({
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  `,
  secondary: css`
    background-color: #fff;
    color: ${({ theme }) => theme.colors.primary};
  `,
}[variant]);

const getTextVariantStyle = ({ variant = 'primary' }: TextProps) => ({
  primary: css`
    color: #233348;
  `,
  secondary: css`
    color: #FFFFFF;
  `,
}[variant]);

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div<IconProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 26px;
  line-height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  ${getIconVariantStyle}
`;

export const Text = styled.h2<TextProps>`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;

  ${getTextVariantStyle}
`;
