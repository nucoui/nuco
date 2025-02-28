import type { MetaFunction } from "react-router";
import { getPageInfo } from "./getPageInfo";

export const getPageInfoMeta = (pathname: string): NonNullable<ReturnType<MetaFunction>> => {
  const pageInfo = getPageInfo(pathname);

  return [
    { title: pageInfo.title },
    { name: "description", content: pageInfo.description },
  ];
};
