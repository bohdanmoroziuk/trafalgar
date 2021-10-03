import { FC } from 'react';

import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardText,
  CardLink,
  CardLinkIcon,
} from 'components/article-card/styles';

import ArrowRightIcon from 'assets/images/arrow-right.png';

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
        Read more <CardLinkIcon src={ArrowRightIcon} alt="arrow right icon" />
      </CardLink>
    </CardContent>
  </Card>
);

export default ArticleCard;
