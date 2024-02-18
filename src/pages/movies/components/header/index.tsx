import React from 'react';

import { DropdownFilterKeyType, QueryParamsType } from '@pages/movies';
import Actions from './Actions';
import Search from './Search';

type MoviesHeaderProps = {
  setActionValues: React.Dispatch<
    React.SetStateAction<QueryParamsType | undefined>
  >;
  setFilterValues: React.Dispatch<React.SetStateAction<DropdownFilterKeyType>>;
};

const MoviesHeader: React.FC<MoviesHeaderProps> = (props) => {
  return (
    <div>
      <Search setActionValues={props.setActionValues} />
      <Actions
        setActionValues={props.setActionValues}
        setFilterValues={props.setFilterValues}
      />
    </div>
  );
};

export default MoviesHeader;
