import { FC } from 'react';

import {
  Card,
  CardIcon,
  CardName,
  CardDescription
} from 'components/service-card/styles';

export interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, name, description }) => (
  <Card>
    <CardIcon src={icon} alt={name} />
    <div>
      <CardName>{name}</CardName>
      <CardDescription>{description}</CardDescription>
    </div>
  </Card>
);

export default ServiceCard;
