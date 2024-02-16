import React from 'react';
import SpinLoader from './SpinLoader';

function LazyLoader(
  Component: React.LazyExoticComponent<any>
): React.ReactNode {
  return (
    <React.Suspense fallback={<SpinLoader />}>
      <Component />
    </React.Suspense>
  );
}

export default LazyLoader;
