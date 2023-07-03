import React from 'react';
import { Heading, Image, LeftBlock, Paragraph, RightBlock, SectionContainer } from './styles';

const AboutSection = () => {
  return (
    <SectionContainer>
      <LeftBlock>
        <Heading>About Us</Heading>
        <Paragraph>
          Yumventure is a culinary journey that brings the world of flavors to your fingertips. With our innovative recipe app, you can embark on a delightful adventure of exploring and creating delicious dishes from various cuisines. Whether you are a seasoned chef or a passionate home cook, Yumventure provides a diverse collection of recipes, ranging from traditional favorites to exciting new creations. Our user-friendly interface, personalized recommendations, and step-by-step instructions make it easy for you to discover, prepare, and share your culinary masterpieces with friends and family. Join us on this delectable Yumventure and unlock the joy of cooking!
        </Paragraph>
      </LeftBlock>
      <RightBlock>
        <Image src={require('../../assets/food_image_3.jpeg')} alt="Image 1" />
        <Image src={require('../../assets/food_image_6.jpeg')} alt="Image 2" />
        <Image src={require('../../assets/food_image_9.jpeg')} alt="Image 3" />
        <Image src={require('../../assets/food_image_12.jpeg')} alt="Image 4" />
      </RightBlock>
    </SectionContainer>
  );
};

export default AboutSection;
