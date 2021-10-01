import { ReactNode } from 'react';

import styled, { css } from 'styled-components';

export type ContainerVariant = 'primary' | 'secondary';

export interface ContainerProps {
  variant?: ContainerVariant;
}

export interface IconContainerProps {
  icon?: ReactNode;
}

const containerVariantStyles = ({ variant = 'primary' }: ContainerProps) => ({
  'primary': css`
    color: #FFFFFF;
    background-color: #458FF6;

    &:hover {
      color: #458FF6;
      background-color: #fff;      
    }
  `,
  'secondary': css`
    color: #458FF6;
    background-color: #fff;

    &:hover {
      color: #FFFFFF;
      background-color: #458FF6;
    }
  `,
}[variant]);

export const Container = styled.button<ContainerProps>`
  font-weight: bold;
  font-size: 18px;
  padding: 16px 40px;
  border: 1.4px solid #458FF6;
  border-radius: 55px;
  cursor: pointer;
  transition: all 220ms ease-in-out;

  ${containerVariantStyles}
`;

export const IconContainer = styled.div<IconContainerProps>`

`;
