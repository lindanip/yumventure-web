import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { API, graphqlOperation } from 'aws-amplify';
import { createRecipe } from '../../graphql/mutations';
import { AppContext } from '../../context/AppProvider';
import { Block, Button, Container, Error, FormContainer, FormGroup, Heading, Image, ImageContainer, Input, Section, StyledForm } from './styles';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  description: Yup.string().required('Description is required'),
  prepTime: Yup.string().required('Prep Time is required'),
  totalTime: Yup.string().required('Total Time is required'),
  cookTime: Yup.string().required('Cook Time is required'),
  servers: Yup.string().required('Serves is required'),
});

const initialValues = {
  title: '',
  author: '',
  description: '',
  totalTime: '',
  prepTime: '',
  cookTime: '',
  servers: '',
  ingredients: '',
  directions: '',
};

const CreateRecipeForm = () => {
  const { recipes, setRecipes } = useContext(AppContext)

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await API.graphql(graphqlOperation(createRecipe, {input: values}))
      setSubmitting(false)
      setRecipes([...recipes, values])
    } catch (err) {
      console.log('error creating recipe:', err)
    }
  };

  return (
    <Section>
      <Container>
        <Heading>About Us</Heading>
        <Block>
          <ImageContainer>
            <Image src={require('../../assets/food_image_8.jpeg')} alt="Form Image" />
          </ImageContainer>
          <FormContainer>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(handleSubmit)}
            >
              {({ isSubmitting }) => (
                <StyledForm>
                  <FormGroup>
                    <Input type="text" name="title" placeholder="Title" />
                    <Error component="div" name="title" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="author" placeholder="Author" />
                    <Error component="div" name="author" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="description" placeholder="Description" />
                    <Error component="div" name="description" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="prepTime" placeholder="Prep Time" />
                    <Input type="text" name="cookTime" placeholder="Cook Time" />
                    <Error component="div" name="prepTime" />
                    <Error component="div" name="cookTime" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="servers" placeholder="Servers" />
                    <Error component="div" name="servers" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="totalTime" placeholder="Total time" />
                    <Error component="div" name="totalTime" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="ingredients" placeholder="Ingredients" as="textarea"/>
                    <Error component="div" name="ingredients" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="directions" placeholder="Directions" as="textarea"/>
                    <Error component="div" name="directions" />
                  </FormGroup>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting' : 'Submit'}
                  </Button>
                </StyledForm>
              )}
            </Formik>
          </FormContainer>
        </Block>
      </Container>
    </Section>
  );
};

export default CreateRecipeForm;
