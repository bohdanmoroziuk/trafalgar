import styled from 'styled-components';

import { Container } from 'components';

export interface NavItemProps {
  isActive?: boolean;
}

export const Section = styled(Container)`
  max-width: 1274px;
  padding: 46px 0 90px 0;
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div<NavItemProps>`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #1F1534;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 220ms ease-in-out;
  opacity: ${({ isActive }) => isActive ? 1 : 0.5};

  &:hover {
    opacity: 1;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const BrandIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: 26px;
  line-height: 33px;
  background-color: #458FF6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const BrandText = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: #233348;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 693px;
  column-gap: 110px;
  padding-top: 74px;
`;

export const Banner = styled.img`
  max-width: 693px;
  width: 100%;
  height: auto;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin-top: 146px;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 21px;
  line-height: 32px;
  color: #7D7987;
  margin-top: 25px;
  margin-bottom: 45px;
`;