import type { LinksFunction } from "react-router";
import type { FileRoutesByPathKey } from "~/constants/PAGE_INFO/PAGE_INFO";

export const generatePageInfoLinks = (_pathname: FileRoutesByPathKey): ReturnType<LinksFunction> => {
  // const pageInfo = getPageInfo(pathname);

  const links: ReturnType<LinksFunction> = [];

  return links;
};
