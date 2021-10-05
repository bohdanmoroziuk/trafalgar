import { FC } from 'react';

import { TestimonialSlide, TestimonialCard } from 'components';

import {
  Slider,
  SlidesWrapper,
  Controls,
  Arrow,
  Point,
  Points,
} from 'components/testimonials-slider/styles';

import ArrowLeft from 'assets/images/slider/arrow-left.png';
import ArrowRightActive from 'assets/images/slider/arrow-right-active.png';

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
      <Arrow src={ArrowLeft} alt="" />
      <Points>
        <Point isActive />
        <Point />
        <Point />
        <Point />
      </Points>
      <Arrow src={ArrowRightActive} alt="" />
    </Controls>
  </Slider>
);

export default TestimonialsSlider;
