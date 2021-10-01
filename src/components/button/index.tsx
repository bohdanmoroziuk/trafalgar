import { FC, HTMLProps } from 'react';

import {
  Container,
  IconContainer,
  ContainerProps,
  IconContainerProps
} from 'components/button/styles';

export type ButtonProps =
  & HTMLProps<HTMLButtonElement>
  & ContainerProps 
  & IconContainerProps;

const Button: FC<ButtonProps> = ({ variant, icon, children }) => (
  <Container variant={variant}>
    {children}
    {icon && (
      <IconContainer>
        {icon}
      </IconContainer>
    )}
  </Container>
);

export default Button;
