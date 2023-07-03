import React from 'react'
import { AboutSection, CreateRecipeForm, Footer, HeroSection, RecipesSection, TopNavigation } from '../../components';

function Home() {
  return (
    <div className="App">
      <TopNavigation />
      <HeroSection />
      <AboutSection />
      <RecipesSection />
      <CreateRecipeForm />
      <Footer />
    </div>
  );
}

export default Home