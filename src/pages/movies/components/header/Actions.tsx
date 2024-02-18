import { filter, sort } from '@assets/index';
import Dropdown from '@components/ui/dropdown';
import { ReactSVG } from 'react-svg';
import { filterOptions, sortOptions } from '../../../../types/globals';
import {
  useSetFilterValues,
  useSetQueryParams,
} from '@context/movies/selectors';
import {
  DropdownFilterKeyType,
  DropdownSortKeyType,
} from '../../../../types/context/movies';

const Actions = () => {
  const useQueryParams = useSetQueryParams();
  const useFilterValues = useSetFilterValues();

  return (
    <div className="title-actions">
      <div className="title">
        <h1>Movies</h1>
      </div>

      <div className="actions">
        <div className="sort">
          <Dropdown
            title="Sırala"
            options={sortOptions}
            onSelect={(option) => {
              useQueryParams((prev) => ({
                ...prev,
                sort: option.value as DropdownSortKeyType,
                order:
                  prev?.sort === option.value && prev.order === 'asc'
                    ? 'desc'
                    : 'asc',
              }));
            }}
            suffixIcon={
              <ReactSVG
                src={sort}
                loading={() => <div className="svg-skeleton"></div>}
              />
            }
          />
        </div>

        <div className="filter">
          <Dropdown
            title="Filtrele"
            options={filterOptions}
            onSelect={(option) => {
              useFilterValues(option.value as DropdownFilterKeyType);
            }}
            suffixIcon={
              <ReactSVG
                src={filter}
                loading={() => <div className="svg-skeleton"></div>}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Actions;
