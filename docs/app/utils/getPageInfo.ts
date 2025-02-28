import { PAGE_INFO } from "../constants/PAGE_INFO";

export const getPageInfo = (pathname: string) => {
  const parsedPathname = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  return PAGE_INFO[parsedPathname as keyof typeof PAGE_INFO];
};
