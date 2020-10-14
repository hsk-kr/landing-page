import React from 'react';
import className from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import Header from 'components/Header';
import Home from 'components/HomeSection';
import About from 'components/AboutSection';
import Portfolio from 'components/PortfolioSection';
import Services from 'components/ServicesSection';
import Prices from 'components/PricesSection';

const cx = className.bind(styles);

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Prices />
    </div>
  );
};

export default LandingPage;
