import { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { TestimonialSlide, TestimonialCard } from 'components';

import {
  Slider,
  SlidesWrapper,
  Controls,
  Arrow,
  Point,
  Points,
} from 'components/testimonials-slider/styles';

export interface TestimonialsSliderProps {
  slides: {
    id: string | number;
    testimonial: {
      author: string;
      avatar: string;
      position: string;
      text: string;
    };
  }[];
}

const TestimonialsSlider: FC<TestimonialsSliderProps> = ({ slides }) => (
  <Slider>
    <SlidesWrapper>
      {slides.map((slide) => (
        <TestimonialSlide key={slide.id}>
          <TestimonialCard
            {...slide.testimonial}
          />
        </TestimonialSlide>
      ))}
    </SlidesWrapper>
    <Controls>
      <Arrow>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </Arrow>
      <Points>
        <Point isActive />
        <Point />
        <Point />
        <Point />
      </Points>
      <Arrow isActive>
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
      </Arrow>
    </Controls>
  </Slider>
);

export default TestimonialsSlider;
