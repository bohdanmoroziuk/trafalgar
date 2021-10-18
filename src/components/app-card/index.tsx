import { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'components';

import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  ButtonIconWrapper,
} from 'components/app-card/styles';

export interface AppCardProps {
  image: string;
  title: string;
  description: string;
  isReversed?: boolean;
  buttonLabel: string;
  buttonIcon?: IconDefinition
}

const AppCard: FC<AppCardProps> = ({
  image,
  title,
  description,
  isReversed,
  buttonLabel,
  buttonIcon,
}) => (
  <Card isReversed={isReversed}>
    <CardImage src={image} alt={title} />
    <CardContent isReversed={isReversed}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <Button variant="secondary">
        {buttonLabel}
        {buttonIcon && (
          <ButtonIconWrapper>
            <FontAwesomeIcon icon={buttonIcon} size="1x" />
          </ButtonIconWrapper>
        )}
      </Button>
    </CardContent>
  </Card>
);

export default AppCard;
