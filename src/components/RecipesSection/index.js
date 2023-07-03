import React, { useContext } from 'react';
import { Card, CardHeading, Container, Grid, Heading, Image, Paragraph, Section } from './styles';
import { AppContext } from '../../context/AppProvider';

const RecipesSection = () => {
  const { recipes } = useContext(AppContext)

  return (
    <Section>
      <Container>
        <Heading>Recipes</Heading>
        { recipes && (
          <Grid>
            {
              recipes.map((item, key) => (
                <Card key={key}>
                  <CardHeading>{item.title}</CardHeading>
                  <Paragraph>{item.description}</Paragraph>
                  <Paragraph>{item.directions}</Paragraph>
                  <Image src={require(`../../assets/food_image_${Math.floor(Math.random() * 12) + 1}.jpeg`)} alt="Recipe image" />
                  
                </Card>
              ))
            }
          </Grid>
        )}
      </Container>
    </Section>
  );
};

export default RecipesSection;
