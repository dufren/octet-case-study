import SpinLoader from '@components/loaders/SpinLoader';
import React from 'react';
import Nav from './components/Nav';
import Credit from './components/Credit';

const Socials = React.lazy(() => import('./components/Socials'));

const Footer = () => {
  return (
    <footer className="footer">
      <React.Suspense fallback={<SpinLoader />}>
        <Socials />
      </React.Suspense>
      <Nav />
      <Credit />
    </footer>
  );
};

export default Footer;
