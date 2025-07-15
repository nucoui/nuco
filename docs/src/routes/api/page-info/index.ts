import type { AnyRouteMatch, useRouter } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";
import { createServerFileRoute } from "@tanstack/react-start/server";

type PageData = {
  [K in `/${string}`]: PageDataValue
};

type PageDataValue = {
  shortTitle: string;
  head: {
    links?: AnyRouteMatch["links"];
    scripts?: AnyRouteMatch["headScripts"];
    meta?: AnyRouteMatch["meta"];
    styles?: AnyRouteMatch["styles"];
  };
  info: {
    pagers: {
      prev?: Parameters<ReturnType<typeof useRouter>["navigate"]>["0"];
      next?: Parameters<ReturnType<typeof useRouter>["navigate"]>["0"];
    };
  };
  children?: PageData;
};

type ResponsePageDataValue = {
  path: Parameters<ReturnType<typeof useRouter>["navigate"]>["0"];
  shortTitle: string;
  head: {
    links?: AnyRouteMatch["links"];
    scripts?: AnyRouteMatch["headScripts"];
    meta?: AnyRouteMatch["meta"];
    styles?: AnyRouteMatch["styles"];
  };
  info: {
    breadcrumbs: [ResponsePageDataValue];
    pagers: {
      prev?: ResponsePageDataValue;
      next?: ResponsePageDataValue;
    };
  };
};

export type { PageData, PageDataValue, ResponsePageDataValue };

const PAGE_DATA: PageData = {
  "/en": {
    shortTitle: "@nuco/core",
    head: {
      meta: [
        { title: "@nuco/core" },
        { name: "description", content: "Core package for @nuco" },
      ],
    },
    info: {
      pagers: {
        prev: undefined,
        next: undefined,
      },
    },
    children: {
      "/docs": {
        shortTitle: "Documentation",
        head: {
          meta: [
            { title: "Documentation | @nuco/core" },
            { name: "description", content: "Documentation for @nuco/core" },
          ],
        },
        info: {
          pagers: {
            prev: undefined,
            next: {
              to: "/en/docs/getting-started",
            },
          },
        },
        children: {
          "/getting-started": {
            shortTitle: "Getting Started",
            head: {
              meta: [
                { title: "Getting Started | @nuco/core" },
                { name: "description", content: "Getting started with @nuco/core" },
              ],
            },
            info: {
              pagers: {
                prev: {
                  to: "/en/docs",
                },
                next: {
                  to: "/en/docs/web-components",
                },
              },
            },
          },
          "/web-components": {
            shortTitle: "Web Components",
            head: {
              meta: [
                { title: "Web Components | @nuco/core" },
                { name: "description", content: "Using @nuco/core with Web Components" },
              ],
            },
            info: {
              pagers: {
                prev: {
                  to: "/en/docs/getting-started",
                },
                next: {
                  to: "/en/docs/web-components/installation",
                },
              },
            },
            children: {
              "/installation": {
                shortTitle: "Installation",
                head: {
                  meta: [
                    { title: "Installation | Web Components | @nuco/core" },
                    { name: "description", content: "Installation guide for Web Components" },
                  ],
                },
                info: {
                  pagers: {
                    prev: {
                      to: "/en/docs/web-components",
                    },
                    next: {
                      to: "/en/docs/web-components/overview",
                    },
                  },
                },
              },
              "/overview": {
                shortTitle: "Overview",
                head: {
                  meta: [
                    { title: "Overview | Web Components | @nuco/core" },
                    { name: "description", content: "Overview of Web Components usage" },
                  ],
                },
                info: {
                  pagers: {
                    prev: {
                      to: "/en/docs/web-components/installation",
                    },
                    next: {
                      to: "/en/docs/web-components/components/anchor",
                    },
                  },
                },
              },
              "/components": {
                shortTitle: "Components",
                head: {
                  meta: [
                    { title: "Components | Web Components | @nuco/core" },
                    { name: "description", content: "Components for Web Components" },
                  ],
                },
                info: {
                  pagers: {
                    prev: {
                      to: "/en/docs/web-components/overview",
                    },
                    next: {
                      to: "/en/docs/web-components/components/anchor",
                    },
                  },
                },
                children: {
                  "/anchor": {
                    shortTitle: "Anchor",
                    head: {
                      meta: [
                        { title: "Anchor | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Anchor component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/overview",
                        },
                        next: {
                          to: "/en/docs/web-components/components/button",
                        },
                      },
                    },
                  },
                  "/button": {
                    shortTitle: "Button",
                    head: {
                      meta: [
                        { title: "Button | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Button component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/anchor",
                        },
                        next: undefined,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const getValue = (path: string): ResponsePageDataValue | undefined => {
  const queryParams = new URLSearchParams(path.split("?")[1]);
  const splitPath = queryParams.get("path")?.split("/").filter(segment => segment !== "").map(segment => `/${segment}`) || [];

  // If no path segments, return undefined
  if (splitPath.length === 0) {
    return undefined;
  }

  // Navigate through the PAGE_DATA structure using a for loop
  let current: PageData = PAGE_DATA;
  let value: PageDataValue | undefined;
  const fullPath = splitPath.join("");

  for (let i = 0; i < splitPath.length; i++) {
    const key = splitPath[i] as keyof typeof current;

    if (i === splitPath.length - 1) {
      // This is the last segment, get the final page info
      const finalCurrent = current[key];
      if (!finalCurrent) {
        return undefined;
      }

      value = finalCurrent;
      break;
    }

    // Navigate to the next level
    const nextLevel: any = (current as any)[key];
    current = nextLevel?.children ?? nextLevel;

    if (!current) {
      return undefined;
    }
  }

  if (!value) {
    return undefined;
  }

  // Generate breadcrumbs by traversing the path segments
  const generateBreadcrumbs = (pathSegments: string[]): ResponsePageDataValue[] => {
    const breadcrumbs: ResponsePageDataValue[] = [];
    let currentData: PageData = PAGE_DATA;

    for (let i = 0; i < pathSegments.length; i++) {
      const key = pathSegments[i] as keyof typeof currentData;
      const currentPageData = currentData[key];

      if (!currentPageData) {
        break;
      }

      const breadcrumbPath = pathSegments.slice(0, i + 1).join("");
      breadcrumbs.push({
        path: { to: breadcrumbPath },
        shortTitle: currentPageData.shortTitle,
        head: currentPageData.head,
        info: {
          breadcrumbs: [] as any, // Avoid circular reference in breadcrumbs
          pagers: {
            prev: undefined,
            next: undefined,
          },
        },
      });

      // Move to the next level
      currentData = currentPageData.children ?? ({} as PageData);
    }

    return breadcrumbs;
  };

  // Helper function to get page data by path
  const getPageDataByPath = (targetPath: string): PageDataValue | undefined => {
    const pathSegments = targetPath.split("/").filter(segment => segment !== "").map(segment => `/${segment}`);
    let current: PageData = PAGE_DATA;

    for (let i = 0; i < pathSegments.length; i++) {
      const key = pathSegments[i] as keyof typeof current;

      if (i === pathSegments.length - 1) {
        return current[key];
      }

      const nextLevel: any = (current as any)[key];
      current = nextLevel?.children ?? nextLevel;

      if (!current) {
        return undefined;
      }
    }

    return undefined;
  };

  // Convert PageDataValue to ResponsePageDataValue
  const convertToResponsePageDataValue = (pageData: PageDataValue, currentPath: string, breadcrumbs: ResponsePageDataValue[]): ResponsePageDataValue => {
    return {
      path: { to: currentPath },
      shortTitle: pageData.shortTitle,
      head: pageData.head,
      info: {
        breadcrumbs: breadcrumbs as [ResponsePageDataValue],
        pagers: {
          prev: pageData.info.pagers.prev
            ? {
                path: pageData.info.pagers.prev,
                shortTitle: pageData.info.pagers.prev.to ? (getPageDataByPath(pageData.info.pagers.prev.to)?.shortTitle || "") : "",
                head: pageData.info.pagers.prev.to ? (getPageDataByPath(pageData.info.pagers.prev.to)?.head || {}) : {},
                info: {
                  breadcrumbs: [] as any,
                  pagers: {},
                },
              }
            : undefined,
          next: pageData.info.pagers.next
            ? {
                path: pageData.info.pagers.next,
                shortTitle: pageData.info.pagers.next.to ? (getPageDataByPath(pageData.info.pagers.next.to)?.shortTitle || "") : "",
                head: pageData.info.pagers.next.to ? (getPageDataByPath(pageData.info.pagers.next.to)?.head || {}) : {},
                info: {
                  breadcrumbs: [] as any,
                  pagers: {},
                },
              }
            : undefined,
        },
      },
    };
  };

  const breadcrumbs = generateBreadcrumbs(splitPath);
  return convertToResponsePageDataValue(value, fullPath, breadcrumbs);
};

export const ServerRoute = createServerFileRoute("/api/page-info/").methods({
  GET: async ({ request }) => {
    const pageInfo = getValue(request.url);

    if (!pageInfo) {
      return json({ error: "Page not found" }, { status: 404 });
    }

    return json(pageInfo);
  },
});
