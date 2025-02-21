import type { AnyRouteMatch } from "@tanstack/react-router";
import { getPageInfo } from "./getPageInfo";

export const getPageInfoMeta = (pathname: string): NonNullable<AnyRouteMatch["meta"]> => {
  const pageInfo = getPageInfo(pathname);

  return [
    { title: pageInfo.title },
    { name: "description", content: pageInfo.description },
  ];
};
