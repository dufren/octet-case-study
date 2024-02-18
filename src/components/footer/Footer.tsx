import React from 'react';
import Nav from './components/Nav';
import Credit from './components/Credit';
import SocialsSkeleton from './components/SocialsSkeleton';

const Socials = React.lazy(() => import('./components/Socials'));

const Footer = () => {
  return (
    <footer className="footer">
      <React.Suspense fallback={<SocialsSkeleton />}>
        <Socials />
      </React.Suspense>
      <Nav />
      <Credit />
    </footer>
  );
};

export default Footer;
