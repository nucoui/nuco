import type { Register } from "react-router";

type FileRoutesByPathKey = keyof Register["params"];

export type PageInfo = {
  [key in FileRoutesByPathKey]: PageInfoValue;
};

export type PageInfoValue = {
  shortTitle: string;
  title: `@nuco/core | ${string}`;
  description: string;
};

const SITE_NAME = "@nuco/core";

export const PAGE_INFO = {
  "/": {
    shortTitle: "Home",
    title: `${SITE_NAME} | Home`,
    description: "Home Page",
  },
  "/docs": {
    shortTitle: "Docs",
    title: `${SITE_NAME} | Docs`,
    description: "Documentation for Nuco",
  },
  // docs/angular
  "/docs/angular/overview": {
    shortTitle: "Overview",
    title: `${SITE_NAME} | Angular Documentation`,
    description: "Angular Documentation for Nuco",
  },
  // docs/react
  "/docs/react": {
    shortTitle: "React",
    title: `${SITE_NAME} | React Documentation`,
    description: "React Documentation for Nuco",
  },
  "/docs/react/installation": {
    shortTitle: "Installation",
    title: `${SITE_NAME} | Installation with React`,
    description: "Getting Started with React Documentation for Nuco",
  },
  "/docs/react/overview": {
    shortTitle: "Overview",
    title: `${SITE_NAME} | Overview with React`,
    description: "Overview with React Documentation for Nuco",
  },
  // docs/svelte
  "/docs/svelte/overview": {
    shortTitle: "Overview",
    title: `${SITE_NAME} | Svelte Documentation`,
    description: "Svelte Documentation for Nuco",
  },
  // docs/vue
  "/docs/vue/overview": {
    shortTitle: "Overview",
    title: `${SITE_NAME} | Vue Documentation`,
    description: "Vue Documentation for Nuco",
  },
  // docs/web-components
  "/docs/web-components": {
    shortTitle: "Web Components",
    title: `${SITE_NAME} | Web Components Documentation`,
    description: "Web Components Documentation for Nuco",
  },
  "/docs/web-components/installation": {
    shortTitle: "Installation",
    title: `${SITE_NAME} | Installation with Web Components`,
    description: "Getting Started with Web Components Documentation for Nuco",
  },
  "/docs/web-components/overview": {
    shortTitle: "Overview",
    title: `${SITE_NAME} | Overview with Web Components`,
    description: "Overview with Web Components Documentation for Nuco",
  },
} as const satisfies PageInfo;
