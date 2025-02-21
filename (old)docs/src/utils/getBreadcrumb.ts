import { PAGE_INFO } from "../constants/PAGE_INFO";

export const getBreadcrumb = (pathname: string) => {
  const spitedPath = pathname.split("/").filter(Boolean);
  const paths = spitedPath.map((_, index) => `/${spitedPath.slice(0, index + 1).join("/")}`);

  const breadcrumb: { shortTitle: string; to: string }[] = [{
    shortTitle: PAGE_INFO["/"].shortTitle,
    to: "/",
  }];
  for (const path of paths) {
    if (PAGE_INFO[path as keyof typeof PAGE_INFO]) {
      const info = PAGE_INFO[path as keyof typeof PAGE_INFO];
      breadcrumb.push({
        shortTitle: info.shortTitle,
        to: path,
      });
      continue;
    }

    if (PAGE_INFO[`${path}/` as keyof typeof PAGE_INFO]) {
      const info = PAGE_INFO[`${path}/` as keyof typeof PAGE_INFO];
      breadcrumb.push({
        shortTitle: info.shortTitle,
        to: `${path}/`,
      });
      continue;
    }

    break;
  }

  return breadcrumb;
};
