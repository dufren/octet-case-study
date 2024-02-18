import { useNavigate } from 'react-router-dom';
import { pathNames } from '../../types/globals';
import React from 'react';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = React.useState(5);

  React.useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate(pathNames.movies.moviesPage);
    }
  }, [counter, navigate]);

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>aradığınız sayfa bulunamadı.</h2>
      <p>{`${counter} saniye içerisinde yönlendirileceksiniz!`}</p>
    </div>
  );
};

export default NotFoundPage;
