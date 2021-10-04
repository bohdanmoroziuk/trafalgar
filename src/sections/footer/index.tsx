import { FC } from 'react';

import { Brand } from 'components';

import {
  Wrapper,
  Inner,
  NavBlock,
  NavBlockLink,
  NavBlockTitle,
  NavBlockLinks,
  Info,
  Copyright,
  Description,
} from 'sections/footer/styles';

const Footer: FC = () => (
  <Wrapper>
    <Inner>
      <Info>
        <Brand text="Trafalgar" variant="secondary" />
        <Description>
          Trafalgar provides progressive, and affordable healthcare, 
          accessible on mobile and online for everyone
        </Description>
        <Copyright>
          © Trafalgar PTY LTD 2020. All rights reserved
        </Copyright>
      </Info>
      <NavBlock>
        <NavBlockTitle>Company</NavBlockTitle>
        <NavBlockLinks>
          <NavBlockLink href="#">About</NavBlockLink>
          <NavBlockLink href="#">Testimonials</NavBlockLink>
          <NavBlockLink href="#">Find a doctor</NavBlockLink>
          <NavBlockLink href="#">Apps</NavBlockLink>
        </NavBlockLinks>
      </NavBlock>
      <NavBlock>
        <NavBlockTitle>Region</NavBlockTitle>
        <NavBlockLinks>
          <NavBlockLink href="#">Indonesia</NavBlockLink>
          <NavBlockLink href="#">Singapore</NavBlockLink>
          <NavBlockLink href="#">Hongkong</NavBlockLink>
          <NavBlockLink href="#">Canada</NavBlockLink>
        </NavBlockLinks>
      </NavBlock>
      <NavBlock>
        <NavBlockTitle>Help</NavBlockTitle>
        <NavBlockLinks>
          <NavBlockLink href="#">Help center</NavBlockLink>
          <NavBlockLink href="#">Contact support</NavBlockLink>
          <NavBlockLink href="#">Instructions</NavBlockLink>
          <NavBlockLink href="#">How it works</NavBlockLink>
        </NavBlockLinks>
      </NavBlock>
    </Inner>
  </Wrapper>
);

export default Footer;
