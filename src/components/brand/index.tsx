import { FC } from 'react';

import {
  Container,
  Icon,
  Text,
  IconProps,
  TextProps,
} from 'components/brand/styles';

export type BrandProps = 
  & IconProps
  & TextProps
  & {
      text: string;
    };

const Brand: FC<BrandProps> = ({ text, variant = 'primary' }) => (
  <Container>
    <Icon variant={variant}>
      {text.charAt(0).toUpperCase()}
    </Icon>
    <Text variant={variant}>{text}</Text>
  </Container>
);

export default Brand;
