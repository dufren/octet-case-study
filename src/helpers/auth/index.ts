import { matchPath } from 'react-router-dom';
import { IRoute } from '../../types/routes';
import { routeTitles } from '../../types/globals';

const matchRoute = (route: string, pathname: string): boolean => {
  const routeParts = route.split('/');
  const pathParts = pathname.split('/');

  if (routeParts.length !== pathParts.length) {
    return false;
  }

  for (let i = 0; i < routeParts.length; i++) {
    if (routeParts[i].startsWith(':')) {
      continue;
    }

    if (routeParts[i] !== pathParts[i]) {
      return false;
    }
  }

  return true;
};

export const searchRoute = (
  pathname: string,
  routes: IRoute[] = []
): IRoute => {
  let result: IRoute = {} as IRoute;

  for (const item of routes) {
    if (item.path && matchRoute(item.path, pathname)) {
      return item;
    }

    if (item.children) {
      const res = searchRoute(pathname, item.children);
      if (Object.keys(res).length) {
        result = res;
      }
    }
  }
  return result;
};

export const getPageTitleFromUrl = (pathname: string) => {
  const currentPageTitleKey = Object.keys(routeTitles).find((key) => {
    if (matchPath({ path: key }, pathname)) {
      return true;
    }
    return false;
  });

  if (currentPageTitleKey !== undefined || currentPageTitleKey !== null) {
    //@ts-ignore
    return routeTitles[currentPageTitleKey];
  } else {
    return 'Movies | Octet';
  }
};
