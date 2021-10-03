import styled, { css } from 'styled-components';

export interface CardProps {
  isReversed?: boolean;
}

export interface CardContentProps {
  isReversed?: boolean;
}

export const Card = styled.article<CardProps>`
  display: flex;

  &:not(:first-of-type) {
    margin-top: 230px;
  }

  ${({ isReversed }) => (
    isReversed && css`
      flex-direction: row-reverse;
    `
  )}
`;

export const CardImage = styled.img`
  height: auto;
`;

export const CardContent = styled.div<CardContentProps>`
  ${({ isReversed }) => (
    isReversed
      ? css`
          padding-right: 136px;
        `
      : css`
          padding-left: 136px;
        `
  )}
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 36px;
  line-height: 56px;
  color: #000000;
  padding-top: 56px;
  padding-bottom: 58px;
`;

export const CardDescription = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  color: #7D7987;
  padding-bottom: 36px;
`;
