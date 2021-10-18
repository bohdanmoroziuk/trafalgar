import styled from 'styled-components';

export const Card = styled.article`
  background: #FFFFFF;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  border-radius: 20px;
`;

export const CardImage = styled.img`

`;

export const CardContent = styled.div`
  padding: 24px 50px 34px 32px;
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  font-size: 21px;
  line-height: 32px;
  color: #000000;
  padding-bottom: 12px;
`;

export const CardText = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: #7D7987;
  padding-bottom: 24px;
`;

export const CardLink = styled.a`
  font-weight: 600;
  font-size: 17px;
  line-height: 28px;
  color: #4089ED;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const CardLinkIconWrapper = styled.div`
  margin-left: 1rem;
`;
