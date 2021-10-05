import styled from 'styled-components';

export interface PointProps {
  isActive?: boolean;
}

export const Slider = styled.div``;

export const SlidesWrapper = styled.div``;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 42px;
`;

export const Arrow = styled.img`
  height: 20px;
`;

export const Points = styled.div`
  margin: 0 82px;
  display: flex;
  align-items: center;
`;

export const Point = styled.div<PointProps>`
  width: 10px;
  height: 10px;
  background: #5B9BF3;
  border-radius: 50%;
  opacity: ${({ isActive }) => isActive ? 1 : 0.3};
  margin: 0 8px;
`;
