export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let debounceTimer: NodeJS.Timeout | null = null;
  return (...args: any[]) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => func(...args), delay);
  };
};
