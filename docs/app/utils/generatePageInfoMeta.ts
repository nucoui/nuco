import { getPageInfo } from "~/utils/getPageInfo";

export const generatePageInfoMeta = (pathname: string) => {
  const pageInfo = getPageInfo(pathname);

  return [
    { title: pageInfo.title },
    { name: "description", content: pageInfo.description },
  ];
};
