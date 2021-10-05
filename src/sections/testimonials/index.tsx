import { FC } from 'react';

import { TestimonialsSlider } from 'components';

import { Section } from 'sections/testimonials/styles';

import Avatar1 from 'assets/images/avatar-1.png';

const slides = [
  {
    id: 1,
    testimonial: {
      author: 'Edward Newgate',
      avatar: Avatar1,
      position: 'Founder Circle',
      text: '"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
    },
  },
];

const Testimonials: FC = () => (
  <Section>
    <TestimonialsSlider slides={slides} />
  </Section>
);

export default Testimonials;
