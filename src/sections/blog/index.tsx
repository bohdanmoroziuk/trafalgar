import { FC } from 'react';

import { Button, ArticleCard } from 'components';

import {
  Section,
  SectionBody,
  SectionTitle,
  SectionHeader,
  SectionFooter,
  ArticlesGrid,
} from 'sections/blog/styles';

import DiseaseDetectionImage from 'assets/images/articles/disease-detection.png';
import HerbalMedicinesImage from 'assets/images/articles/herbal-medicines.png';
import NaturalCareImage from 'assets/images/articles/natural-care.png';

const articles = [
  {
    image: DiseaseDetectionImage,
    title: 'Disease detection, check up in the laboratory',
    text: 'In this case, the role of the health laboratory is very important to do a disease detection...',
    link: '#',
  },
  {
    image: HerbalMedicinesImage,
    title: 'Herbal medicines that are safe for consumption',
    text: 'Herbal medicine is very widely used at this time because of its very good for your health...',
    link: '#',
  },
  {
    image: NaturalCareImage,
    title: 'Natural care for healthy facial skin',
    text: 'A healthy lifestyle should start from now and also for your skin health. There are some...',
    link: '#',
  },
];

const Blog: FC = () => (
  <Section>
    <SectionHeader>
      <SectionTitle>
        Check out our latest article
      </SectionTitle>
    </SectionHeader>
    <SectionBody>
      <ArticlesGrid>
        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            {...article}
          />
        ))}
      </ArticlesGrid>
    </SectionBody>
    <SectionFooter>
      <Button variant="secondary">View all</Button>
    </SectionFooter>
  </Section>
);

export default Blog;
