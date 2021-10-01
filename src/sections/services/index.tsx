import { FC } from 'react';

import { ServiceCard, Button } from 'components';

import {
  Section,
  SectionTitle,
  SectionDescription,
  ServiceGrid,
  SectionFooter,
} from 'sections/services/styles';

import SearchDoctorIcon from 'assets/images/services/search-doctor.png';
import OnlinePharmacyIcon from 'assets/images/services/online-pharmacy.png';
import ConsultationIcon from 'assets/images/services/consultation.png';
import DetailsInfoIcon from 'assets/images/services/details-info.png';
import EmergencyCareIcon from 'assets/images/services/emergency-care.png';
import TrackingIcon from 'assets/images/services/tracking.png';

const services = [
  {
    icon: SearchDoctorIcon,
    name: 'Search doctor',
    description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
  },
  {
    icon: OnlinePharmacyIcon,
    name: 'Online pharmacy',
    description: 'Buy  your medicines with our mobile application with a simple delivery system',
  },
  {
    icon: ConsultationIcon,
    name: 'Consultation',
    description: 'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    icon: DetailsInfoIcon,
    name: 'Details info',
    description: 'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    icon: EmergencyCareIcon,
    name: 'Emergency care',
    description: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
  },
  {
    icon: TrackingIcon,
    name: 'Tracking',
    description: 'Track and save your medical history and health data ',
  },
];

const Services: FC = () => (
  <Section>
    <SectionTitle>
      Our services
    </SectionTitle>
    <SectionDescription>
      We provide to you the best choiches for you. 
      Adjust it to your health needs and make sure 
      your undergo treatment with our highly qualified 
      doctors you can consult with us which type of 
      service is suitable for your health
    </SectionDescription>
    <ServiceGrid>
      {services.map((service) => (
        <ServiceCard
          key={service.name}
          {...service}
        />
      ))}
    </ServiceGrid>
    <SectionFooter>
      <Button variant="secondary">
        Learn more
      </Button>
    </SectionFooter>
  </Section>
);

export default Services;
