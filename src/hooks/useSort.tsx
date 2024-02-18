type SortableItem = {
  [key: string]: string | number | boolean;
};

export const useSort = <T extends SortableItem>(
  array: T[],
  key: string,
  order: 'asc' | 'desc' = 'asc'
) =>
  array.sort((a, b) => {
    const aValue = a[key];
    const bValue = b[key];

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return order === 'asc' ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return order === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
      return order === 'asc'
        ? aValue === bValue
          ? 0
          : aValue
            ? -1
            : 1
        : aValue === bValue
          ? 0
          : aValue
            ? 1
            : -1;
    }

    throw new Error('hata oluştu!');
  });
