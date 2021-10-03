import { FC } from 'react';

import { Button } from 'components';

import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription
} from 'components/app-card/styles';

export interface AppCardProps {
  image: string;
  title: string;
  description: string;
  isReversed?: boolean;
}

const AppCard: FC<AppCardProps> = ({ image, title, description, isReversed }) => (
  <Card isReversed={isReversed}>
    <CardImage src={image} alt={title} />
    <CardContent isReversed={isReversed}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <Button variant="secondary">Learn more</Button>
    </CardContent>
  </Card>
);

export default AppCard;
