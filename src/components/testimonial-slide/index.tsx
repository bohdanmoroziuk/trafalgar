import { FC } from 'react';

import {
  Slide,
  SliderBody,
  SlideTitle,
  SlideHeader
} from 'components/testimonial-slide/styles';

const TestimonialSlide: FC = ({ children }) => (
  <Slide>
    <SlideHeader>
      <SlideTitle>
        What our customer are saying
      </SlideTitle>
    </SlideHeader>
    <SliderBody>
      {children}
    </SliderBody>
  </Slide>
);

export default TestimonialSlide;
