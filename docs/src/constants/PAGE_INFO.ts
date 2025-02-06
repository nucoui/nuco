import type { FileRoutesByPath } from "@tanstack/react-router";

type FileRoutesByPathKey = keyof FileRoutesByPath;

export type PageInfo = {
  [key in FileRoutesByPathKey]: PageInfoValue;
};

export type PageInfoValue = {
  shortTitle: string;
  title: string;
  description: string;
};

export const PAGE_INFO = {
  "/": {
    shortTitle: "Home",
    title: "Home",
    description: "Home Page",
  },
  "/docs": {
    shortTitle: "Docs",
    title: "Docs",
    description: "Documentation for Nuco",
  },
  "/docs/": {
    shortTitle: "Docs",
    title: "Docs",
    description: "Documentation for Nuco",
  },
  "/docs/react/": {
    shortTitle: "React",
    title: "React Documentation",
    description: "React Documentation for Nuco",
  },
  "/docs/react/getting-started": {
    shortTitle: "Getting Started",
    title: "Getting Started with React",
    description: "Getting Started with React Documentation for Nuco",
  },
  "/docs/web-components/": {
    shortTitle: "Web Components",
    title: "Web Components Documentation",
    description: "Web Components Documentation for Nuco",
  },
  "/docs/web-components/getting-started": {
    shortTitle: "Getting Started",
    title: "Getting Started with Web Components",
    description: "Getting Started with Web Components Documentation for Nuco",
  },
} as const satisfies PageInfo;
