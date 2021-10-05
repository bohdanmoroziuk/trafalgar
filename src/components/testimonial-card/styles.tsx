import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  justify-content: space-between;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`

`;

export const Info = styled.div`
  margin-left: 28px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 22px;
  color: #FFFFFF;
`;

export const Position = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
`;

export const Text = styled.p`
  max-width: 420px;
  font-size: 19px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.9);
`;