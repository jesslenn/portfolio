import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      My bio will go here!  This is where I talk about myself so you can get to know me better!
    </SectionText>
    <Button onClick={() => window.location = 'http://linkedin.com/in/jessicalennick'}>
      Learn More
    </Button>
  </LeftSection>
</Section>
);

export default Hero;