import { FC } from 'react';

import { Hero, Services, Apps, Blog, Footer } from 'sections';

const Home: FC = () => (
  <>
    <Hero />
    <Services />
    <Apps />
    <Blog />
    <Footer />
  </>
);

export default Home;
