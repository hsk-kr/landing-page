import React from 'react';

// Components
import Header from 'components/Header';
import Home from 'components/HomeSection';
import About from 'components/AboutSection';
import Portfolio from 'components/PortfolioSection';
import Services from 'components/ServicesSection';
import Prices from 'components/PricesSection';
import TransparentSection from 'components/TransparentSection';

// Resources
import Bg1 from 'resources/TransparentSection/bg1.jpg';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Prices />
      <TransparentSection bgImg={Bg1} />
    </div>
  );
};

export default LandingPage;
