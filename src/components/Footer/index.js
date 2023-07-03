import React from 'react';
import { ColumnBlock, Container, FirstRow, Heading, Link, LocationText, SecondRow, Section } from './styles';

const Footer = () => {
  return (
    <Section>
      <Container>
        <FirstRow>
          <Heading>Spice up your life and let your culinary creations take flight!</Heading>
        </FirstRow>
        <SecondRow>
        <ColumnBlock>
            <Link href="#">Terms of use</Link>
            <Link href="#">Private policy</Link>
          </ColumnBlock>
          <ColumnBlock>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Youtube</Link>
          </ColumnBlock>
          <ColumnBlock>
            <LocationText href="#">
              75 Loveday, 2023
              Johannesburg, South African
              +27 21 469 1500
              info@yumventure.co.za
            </LocationText>
          </ColumnBlock>
          <ColumnBlock>
            <Link href="#">@2023 Yumventure</Link>
          </ColumnBlock>
        </SecondRow>
      </Container>
    </Section>
  );
};

export default Footer;