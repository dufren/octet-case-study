export const useGenerateQueryParams = <T extends Record<string, any>>(
  params: T
): string => {
  const entries = Object.entries(params);

  const queryParams = entries
    .filter(([_, value]) => value !== null && value !== '')
    .map(([key, value]) => {
      if (key === 'q') {
        return `${key}=${value}`;
      }
      return `_${key}=${value}`;
    })
    .join('&');

  return queryParams ? '?' + queryParams : '';
};
