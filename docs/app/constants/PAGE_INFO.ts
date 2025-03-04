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

export const PAGE_INFO = {
  "/": {
    shortTitle: "Home",
    title: "@nuco/core | Home",
    description: "Home Page",
  },
  "/docs": {
    shortTitle: "Docs",
    title: "@nuco/core | Docs",
    description: "Documentation for Nuco",
  },
  // docs/angular
  "/docs/angular/overview": {
    shortTitle: "Overview",
    title: "@nuco/core | Angular Documentation",
    description: "Angular Documentation for Nuco",
  },
  // docs/react
  "/docs/react": {
    shortTitle: "React",
    title: "@nuco/core | React Documentation",
    description: "React Documentation for Nuco",
  },
  "/docs/react/installation": {
    shortTitle: "Installation",
    title: "@nuco/core | installation with React",
    description: "Getting Started with React Documentation for Nuco",
  },
  "/docs/react/overview": {
    shortTitle: "Overview",
    title: "@nuco/core | overview with React",
    description: "Overview with React Documentation for Nuco",
  },
  // docs/svelte
  "/docs/svelte/overview": {
    shortTitle: "Overview",
    title: "@nuco/core | Svelte Documentation",
    description: "Svelte Documentation for Nuco",
  },
  // docs/vue
  "/docs/vue/overview": {
    shortTitle: "Overview",
    title: "@nuco/core | Vue Documentation",
    description: "Vue Documentation for Nuco",
  },
  // docs/web-components
  "/docs/web-components": {
    shortTitle: "Web Components",
    title: "@nuco/core | Web Components Documentation",
    description: "Web Components Documentation for Nuco",
  },
  "/docs/web-components/installation": {
    shortTitle: "Installation",
    title: "@nuco/core | Installation with Web Components",
    description: "Getting Started with Web Components Documentation for Nuco",
  },
  "/docs/web-components/overview": {
    shortTitle: "Overview",
    title: "@nuco/core | Overview with Web Components",
    description: "Overview with Web Components Documentation for Nuco",
  },
} as const satisfies PageInfo;
