import type { Register } from "react-router";
import { DOCS_PAGE_INFO } from "~/constants/PAGE_INFO/DOCS_INFO";
import { SITE_NAME } from "~/constants/PAGE_INFO/SITE_NAME";

export type FileRoutesByPathKey = keyof Register["params"];

export type PageInfo<T extends string> = {
  [key in T]: PageInfoValue;
};

export type PageInfoValue = {
  shortTitle: string;
  title: `@nuco/core | ${string}`;
  description: string;
  links: {
    prev: FileRoutesByPathKey | undefined;
    next: FileRoutesByPathKey | undefined;
  };
};

export const PAGE_INFO = {
  "/": {
    shortTitle: "Home",
    title: `${SITE_NAME} | Home`,
    description: "Home Page",
    links: {
      prev: undefined,
      next: undefined,
    },
  },
  ...DOCS_PAGE_INFO,
} as const satisfies PageInfo<FileRoutesByPathKey>;
