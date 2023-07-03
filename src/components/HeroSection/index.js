import React from 'react';
import { Container, Content, Heading, Paragraph, Section } from './styles';

const HeroSection = () => {
  return (
    <Section backgroundImage={require('../../assets/food_image_1.jpeg')}>
      <Container>
        <Content>
          <Heading>FlavorQuest: Embark on a colorful Tasty Adventure!</Heading>
          <Paragraph>
            Unleash your taste buds and explore a world of culinary wonders like never before.
          </Paragraph>
        </Content>
      </Container>
    </Section>
  );
};

export default HeroSection;