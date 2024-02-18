import { IRoute } from '../../types/routes';

export const searchRoute = (
  pathname: string,
  routes: IRoute[] = []
): IRoute => {
  let result: IRoute = {} as IRoute;

  for (const item of routes) {
    if (item.path === pathname) {
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
