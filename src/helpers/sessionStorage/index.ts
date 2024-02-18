// i used the session storage because of testing purposes
// i wanted to keep the user logged in after refreshing the page
// and also i wanted to keep the user logged in after closing the tab for better testing

const setSessionStorageItems = <T>(keys: string[], values: T[]): void => {
  if (keys.length !== values.length) return;

  keys.forEach((key, index) => {
    sessionStorage.setItem(key, JSON.stringify(values[index]));
  });
};

const getSessionStorageItem = (key: string) => {
  const data = sessionStorage.getItem(key);
  return data !== null ? JSON.parse(data) : null;
};

const deleteSessionStorageItem = (key: string) => {
  return sessionStorage.removeItem(key);
};

const clearItems = (keys: string[]): void => {
  if (keys.length === 0) return;
  keys.forEach((key) => deleteSessionStorageItem(key));
};

export const SessionStorageHelper = {
  setSessionStorageItems,
  getSessionStorageItem,
  deleteSessionStorageItem,
  clearItems,
};
