import { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardText,
  CardLink,
  CardLinkIconWrapper,
} from 'components/article-card/styles';

export interface ArticleCardProps {
  image: string;
  title: string;
  text: string;
  link: string;
}

const ArticleCard: FC<ArticleCardProps> = ({ image, title, text, link }) => (
  <Card>
    <CardImage src={image} alt={title} />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <CardLink href={link}>
        Read more
        <CardLinkIconWrapper>
          <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />
        </CardLinkIconWrapper>
      </CardLink>
    </CardContent>
  </Card>
);

export default ArticleCard;
