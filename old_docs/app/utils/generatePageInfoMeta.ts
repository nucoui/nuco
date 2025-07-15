import type { MetaFunction } from "react-router";
import type { FileRoutesByPathKey } from "~/constants/PAGE_INFO/PAGE_INFO";
import { getPageInfo } from "~/utils/getPageInfo";

export const generatePageInfoMeta = (pathname: FileRoutesByPathKey): ReturnType<MetaFunction> => {
  const pageInfo = getPageInfo(pathname);

  return [
    { title: pageInfo.title },
    { name: "description", content: pageInfo.description },
  ];
};
