import { FC } from 'react';

import { AppCard } from 'components';

import { Section } from 'sections/apps/styles';

import MobileAppImage from 'assets/images/apps/mobile-apps.png';
import HealthcareProvidersImage from 'assets/images/apps/healthcare-providers.png';

const apps = [
  {
    image: HealthcareProvidersImage,
    title: 'Leading healthcare providers',
    description: 'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver',
  },
  {
    image: MobileAppImage,
    title: 'Download our mobile apps',
    description: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
    isReversed: true,
  },
];

const Apps: FC = () => (
  <Section>
    {apps.map((app) => (
      <AppCard
        key={app.title}
        {...app}
      />
    ))}
  </Section>
);

export default Apps;
