import styled from 'styled-components';

import { Container } from 'components';

export const Section = styled(Container)`
  max-width: 1120px;
  padding: 100px 0 100px 0;
`;

export const SectionTitle = styled.h3`
  font-weight: bold;
  font-size: 36px;
  line-height: 56px;
  color: #000000;
  text-align: center;
  position: relative;
  padding-bottom: 60px;

  &::after {
    content: "";
    position: absolute;
    left: -50%;
    bottom: 26px;
    transform: translateX(50%);
    width: 56px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SectionDescription = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #7D7987;
  text-align: center;
  max-width: 952px;
  margin: 0 auto;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 36px;
  padding-top: 80px;
`;

export const SectionFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding-top: 72px;
`;
