import { FC } from 'react';

import { Hero, Services, Apps, Blog } from 'sections';

const Home: FC = () => (
  <>
    <Hero />
    <Services />
    <Apps />
    <Blog />
  </>
);

export default Home;
