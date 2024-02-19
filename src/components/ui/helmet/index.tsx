import React from 'react';
import { Helmet as GlobalHelmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPageTitleFromUrl } from '@helpers/auth';

type HelmetProps = {
  description?: string;
};

const Helmet: React.FC<HelmetProps> = ({ description }) => {
  const location = useLocation();
  const pageTitle = getPageTitleFromUrl(location.pathname);

  return (
    <HelmetProvider>
      <GlobalHelmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{`${pageTitle} | Octet`}</title>
        <link
          rel="shortcut icon"
          href="./favicon.ico?v=3"
          type="image/x-icon"
        />
      </GlobalHelmet>
    </HelmetProvider>
  );
};

export default Helmet;
