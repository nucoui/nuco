import type { FileRoutesByPathKey, PageInfo } from "~/constants/PAGE_INFO/PAGE_INFO";
import { SITE_NAME } from "~/constants/PAGE_INFO/SITE_NAME";

type DocsRoutesByPathKey = Extract<FileRoutesByPathKey, `/docs${string}`>;
type DocsReactRoutesByPathKey = Extract<FileRoutesByPathKey, `/docs/react${string}`>;
type DocsAngularRoutesByPathKey = Extract<FileRoutesByPathKey, `/docs/angular${string}`>;
type DocsVueRoutesByPathKey = Extract<FileRoutesByPathKey, `/docs/vue${string}`>;
type DocsSvelteRoutesByPathKey = Extract<FileRoutesByPathKey, `/docs/svelte${string}`>;
type DocsWebComponentsRoutesByPathKey = Extract<FileRoutesByPathKey, `/docs/web-components${string}`>;

export const WEB_COMPONENTS_DOCS_PAGE_INFO = {
  "/docs/web-components": {
    shortTitle: "Web Components",
    title: `${SITE_NAME} | Web Components Documentation`,
    description: "Web Components Documentation for Nuco",
    links: {
      prev: undefined,
      next: "/docs/web-components/overview",
    },
  },
  "/docs/web-components/overview": {
    shortTitle: "Overview",
    title: `${SITE_NAME} | Web Components Documentation`,
    description: "Web Components Documentation for Nuco",
    links: {
      prev: undefined,
      next: "/docs/web-components/installation",
    },
  },
  "/docs/web-components/installation": {
    shortTitle: "Installation",
    title: `${SITE_NAME} | Installation with Web Components`,
    description: "Getting Started with Web Components Documentation for Nuco",
    links: {
      prev: "/docs/web-components/overview",
      next: "/docs/web-components/components/anchor",
    },
  },
  "/docs/web-components/components/button": {
    shortTitle: "Button",
    title: `${SITE_NAME} | Button Component`,
    description: "Button Component Documentation for Nuco",
    links: {
      prev: "/docs/web-components/components/anchor",
      next: undefined,
    },
  },
  "/docs/web-components/components/anchor": {
    shortTitle: "Anchor",
    title: `${SITE_NAME} | Anchor Component`,
    description: "Anchor Component Documentation for Nuco",
    links: {
      prev: "/docs/web-components/installation",
      next: "/docs/web-components/components/button",
    },
  },
} as const satisfies PageInfo<DocsWebComponentsRoutesByPathKey>;

export const ANGULAR_DOCS_PAGE_INFO = {
  "/docs/angular/overview": {
    shortTitle: "Overview",
    title: `${SITE_NAME} | Angular Documentation`,
    description: "Angular Documentation for Nuco",
    links: {
      prev: undefined,
      next: "/docs/angular/installation",
    },
  },
  "/docs/angular/installation": {
    shortTitle: "Installation",
    title: `${SITE_NAME} | Installation with Angular`,
    description: "Getting Started with Angular Documentation for Nuco",
    links: {
      prev: "/docs/angular/overview",
      next: "/docs/angular/components/anchor",
    },
  },
  "/docs/angular/components/anchor": {
    shortTitle: "Anchor",
    title: `${SITE_NAME} | Anchor Component`,
    description: "Anchor Component Documentation for Nuco",
    links: {
      prev: "/docs/angular/installation",
      next: "/docs/angular/components/button",
    },
  },
  "/docs/angular/components/button": {
    shortTitle: "Button",
    title: `${SITE_NAME} | Button Component`,
    description: "Button Component Documentation for Nuco",
    links: {
      prev: "/docs/angular/components/anchor",
      next: undefined,
    },
  },
} as const satisfies PageInfo<DocsAngularRoutesByPathKey>;

export const REACT_DOCS_PAGE_INFO = {
  "/docs/react": {
    shortTitle: "React",
    title: `${SITE_NAME} | React Documentation`,
    description: "React Documentation for Nuco",
    links: {
      prev: undefined,
      next: "/docs/react/overview",
    },
  },
  "/docs/react/installation": {
    shortTitle: "Installation",
    title: `${SITE_NAME} | Installation with React`,
    description: "Getting Started with React Documentation for Nuco",
    links: {
      prev: "/docs/react/overview",
      next: "/docs/react/components/anchor",
    },
  },
  "/docs/react/overview": {
    shortTitle: "Overview",
    title: `${SITE_NAME} | Overview with React`,
    description: "Overview with React Documentation for Nuco",
    links: {
      prev: undefined,
      next: "/docs/react/installation",
    },
  },
  "/docs/react/components/anchor": {
    shortTitle: "Anchor",
    title: `${SITE_NAME} | Anchor Component`,
    description: "Anchor Component Documentation for Nuco",
    links: {
      prev: "/docs/react/installation",
      next: "/docs/react/components/button",
    },
  },
  "/docs/react/components/button": {
    shortTitle: "Button",
    title: `${SITE_NAME} | Button Component`,
    description: "Button Component Documentation for Nuco",
    links: {
      prev: "/docs/react/components/anchor",
      next: undefined,
    },
  },
} as const satisfies PageInfo<DocsReactRoutesByPathKey>;

export const SVELTE_DOCS_PAGE_INFO = {
  "/docs/svelte/overview": {
    shortTitle: "Overview",
    title: `${SITE_NAME} | Svelte Documentation`,
    description: "Svelte Documentation for Nuco",
    links: {
      prev: undefined,
      next: "/docs/svelte/installation",
    },
  },
  "/docs/svelte/installation": {
    shortTitle: "Installation",
    title: `${SITE_NAME} | Installation with Svelte`,
    description: "Getting Started with Svelte Documentation for Nuco",
    links: {
      prev: "/docs/svelte/overview",
      next: "/docs/svelte/components/anchor",
    },
  },
  "/docs/svelte/components/anchor": {
    shortTitle: "Anchor",
    title: `${SITE_NAME} | Anchor Component`,
    description: "Anchor Component Documentation for Nuco",
    links: {
      prev: "/docs/svelte/installation",
      next: "/docs/svelte/components/button",
    },
  },
  "/docs/svelte/components/button": {
    shortTitle: "Button",
    title: `${SITE_NAME} | Button Component`,
    description: "Button Component Documentation for Nuco",
    links: {
      prev: "/docs/svelte/components/anchor",
      next: undefined,
    },
  },
} as const satisfies PageInfo<DocsSvelteRoutesByPathKey>;

export const VUE_DOCS_PAGE_INFO = {
  "/docs/vue/overview": {
    shortTitle: "Overview",
    title: `${SITE_NAME} | Vue Documentation`,
    description: "Vue Documentation for Nuco",
    links: {
      prev: undefined,
      next: "/docs/vue/installation",
    },
  },
  "/docs/vue/installation": {
    shortTitle: "Installation",
    title: `${SITE_NAME} | Installation with Vue`,
    description: "Getting Started with Vue Documentation for Nuco",
    links: {
      prev: "/docs/vue/overview",
      next: "/docs/vue/components/anchor",
    },
  },
  "/docs/vue/components/anchor": {
    shortTitle: "Anchor",
    title: `${SITE_NAME} | Anchor Component`,
    description: "Anchor Component Documentation for Nuco",
    links: {
      prev: "/docs/vue/installation",
      next: "/docs/vue/components/button",
    },
  },
  "/docs/vue/components/button": {
    shortTitle: "Button",
    title: `${SITE_NAME} | Button Component`,
    description: "Button Component Documentation for Nuco",
    links: {
      prev: "/docs/vue/components/anchor",
      next: undefined,
    },
  },
} as const satisfies PageInfo<DocsVueRoutesByPathKey>;

export const DOCS_PAGE_INFO = {
  "/docs": {
    shortTitle: "Docs",
    title: `${SITE_NAME} | Docs`,
    description: "Documentation for Nuco",
    links: {
      prev: undefined,
      next: "/docs/web-components/overview",
    },
  },
  ...WEB_COMPONENTS_DOCS_PAGE_INFO,
  ...SVELTE_DOCS_PAGE_INFO,
  ...VUE_DOCS_PAGE_INFO,
  ...ANGULAR_DOCS_PAGE_INFO,
  ...REACT_DOCS_PAGE_INFO,
} as const satisfies PageInfo<DocsRoutesByPathKey>;
