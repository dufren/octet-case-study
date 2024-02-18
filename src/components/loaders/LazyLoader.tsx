import React from 'react';
import PageLoader from './PageLoader';

function LazyLoader(
  Component: React.LazyExoticComponent<any>
): React.ReactNode {
  return (
    <React.Suspense fallback={<PageLoader />}>
      <Component />
    </React.Suspense>
  );
}

export default LazyLoader;
