import { FC } from 'react';

import {
  Card,
  Author,
  Info,
  Avatar,
  Name,
  Position,
  Text,
} from 'components/testimonial-card/styles';

export interface TestimonialCardProps {
  author: string;
  avatar: string;
  position: string;
  text: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ author, avatar, position, text }) => (
  <Card>
    <Author>
      <Avatar src={avatar} alt={author} />
      <Info>
        <Name>{author}</Name>
        <Position>{position}</Position>
      </Info>
    </Author>
    <Text>{text}</Text>
  </Card>
);

export default TestimonialCard;
