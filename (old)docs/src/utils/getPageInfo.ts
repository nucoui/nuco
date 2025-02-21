import { PAGE_INFO } from "../constants/PAGE_INFO";

export const getPageInfo = (pathname: string) => {
  return PAGE_INFO[pathname as keyof typeof PAGE_INFO];
};
