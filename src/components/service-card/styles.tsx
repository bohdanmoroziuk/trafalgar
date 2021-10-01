import styled from 'styled-components';

export const Card = styled.article`
  background: #FFFFFF;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  border-radius: 20px;
  padding: 40px;

  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const CardIcon = styled.img`
  padding-bottom: 22px;
  height: auto;
`;

export const CardName = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 56px;
  color: #000000;
`;

export const CardDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: #7D7987;
`;
