import styled from 'styled-components';

import { Container } from 'components';

export const Wrapper = styled.footer`
  background: linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%);
  padding: 118px 190px 112px 190px;
`;

export const Inner = styled(Container)`
  max-width: 1272px;
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  max-width: 390px;
`;

export const Copyright = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: #FFFFFF;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;
  padding: 16px 0 30px 0;
`;

export const NavBlock = styled.div`

`;

export const NavBlockTitle = styled.h5`
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
  color: #FFFFFF;
  padding-bottom: 12px;
`;

export const NavBlockLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavBlockLink = styled.a`
  font-weight: 300;
  font-size: 18px;
  line-height: 38px;
  color: #FFFFFF;
  text-decoration: none;
`;
