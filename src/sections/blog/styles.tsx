import styled from 'styled-components';

import { Container } from 'components';

export const Section = styled(Container)`
  max-width: 1118px;
  padding: 100px 0 200px 0;
`;

export const SectionHeader = styled.header`

`;

export const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 56px;
  color: #000000;
  text-align: center;
  padding-bottom: 105px;
`;

export const SectionBody = styled.main`
  padding-bottom: 68px;
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 34px;
`;

export const SectionFooter = styled.footer`
  display: flex;
  justify-content: center;
`;
