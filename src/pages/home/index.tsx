import { FC } from 'react';

import { Hero, Services, Apps, Testimonials, Blog, Footer } from 'sections';

const Home: FC = () => (
  <>
    <Hero />
    <Services />
    <Apps />
    <Testimonials />
    <Blog />
    <Footer />
  </>
);

export default Home;
