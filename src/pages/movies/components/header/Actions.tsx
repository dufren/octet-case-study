import { filter, sort } from '@assets/index';
import Dropdown from '@components/ui/dropdown';
import {
  DropdownFilterKeyType,
  DropdownSortKeyType,
  QueryParamsType,
} from '@pages/movies';
import { ReactSVG } from 'react-svg';
import { filterOptions, sortOptions } from '../../../../types/globals';

type ActionsProps = {
  setActionValues: React.Dispatch<
    React.SetStateAction<QueryParamsType | undefined>
  >;
  setFilterValues: React.Dispatch<React.SetStateAction<DropdownFilterKeyType>>;
};

const Actions: React.FC<ActionsProps> = (props) => {
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
              props.setActionValues((prev) => ({
                ...prev,
                sort: option.value as DropdownSortKeyType,
                order:
                  prev?.sort === option.value && prev.order === 'asc'
                    ? 'desc'
                    : 'asc',
              }));
            }}
            suffixIcon={<ReactSVG src={sort} />}
          />
        </div>

        <div className="filter">
          <Dropdown
            title="Filtrele"
            options={filterOptions}
            onSelect={(option) => {
              props.setFilterValues(option.value as DropdownFilterKeyType);
            }}
            suffixIcon={<ReactSVG src={filter} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Actions;
