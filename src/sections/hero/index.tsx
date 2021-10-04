import { FC } from 'react';

import { Button, Brand } from 'components';

import { 
  Section, 
  Navbar, 
  Nav, 
  NavItem, 
  Content,
  Title,
  Banner,
  Description
 } from 'sections/hero/styles';

import BannerImage from 'assets/images/trafalgar-header.png';

const Hero: FC = () => (
  <Section>
    <Navbar>
      <Brand text="Trafalgar" />
      <Nav>
        <NavItem isActive>Home</NavItem>
        <NavItem>Find a doctor</NavItem>
        <NavItem>Apps</NavItem>
        <NavItem>Testimonials</NavItem>
        <NavItem>About us</NavItem>
      </Nav>
    </Navbar>
    <Content>
      <div>
        <Title>
          Virtual healthcare for you
        </Title>
        <Description>
          Trafalgar provides progressive, and affordable 
          healthcare, accessible on mobile and online 
          for everyone
        </Description>
        <Button>
          Consult today
        </Button>
      </div>
      <Banner src={BannerImage} alt="" />
    </Content>
  </Section>
);

export default Hero;
