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
              },
            },
          },
          "/react": {
            shortTitle: "React",
            head: {
              meta: [
                { title: "React | @nuco/core" },
                { name: "description", content: "Using @nuco/core with React" },
              ],
            },
            info: {
              pagers: {
                prev: {
                  to: "/en/docs/getting-started",
                },
                next: {
                  to: "/en/docs/react/installation",
                },
              },
            },
            children: {
              "/installation": {
                shortTitle: "Installation",
                head: {
                  meta: [
                    { title: "Installation | React | @nuco/core" },
                    { name: "description", content: "Installation guide for React" },
                  ],
                },
                info: {
                  pagers: {
                    prev: {
                      to: "/en/docs/react",
                    },
                    next: {
                      to: "/en/docs/react/overview",
                    },
                  },
                },
              },
              "/overview": {
                shortTitle: "Overview",
                head: {
                  meta: [
                    { title: "Overview | React | @nuco/core" },
                    { name: "description", content: "Overview of React usage" },
                  ],
                },
                info: {
                  pagers: {
                    prev: {
                      to: "/en/docs/react/installation",
                    },
                    next: {
                      to: "/en/docs/react/components/anchor",
                    },
                  },
                },
              },
              "/components": {
                shortTitle: "Components",
                head: {
                  meta: [
                    { title: "Components | React | @nuco/core" },
                    { name: "description", content: "Components for React" },
                  ],
                },
                info: {
                  pagers: {
                    prev: {
                      to: "/en/docs/react/overview",
                    },
                    next: {
                      to: "/en/docs/react/components/badge",
                    },
                  },
                },
                children: {
                  "/anchor": {
                    shortTitle: "Anchor",
                    head: {
                      meta: [
                        { title: "Anchor | Components | React | @nuco/core" },
                        { name: "description", content: "Anchor component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/overview",
                        },
                        next: {
                          to: "/en/docs/react/components/badge",
                        },
                      },
                    },
                  },
                  "/badge": {
                    shortTitle: "Badge",
                    head: {
                      meta: [
                        { title: "Badge | Components | React | @nuco/core" },
                        { name: "description", content: "Badge component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/anchor",
                        },
                        next: {
                          to: "/en/docs/react/components/breadcrumb",
                        },
                      },
                    },
                  },
                  "/breadcrumb": {
                    shortTitle: "Breadcrumb",
                    head: {
                      meta: [
                        { title: "Breadcrumb | Components | React | @nuco/core" },
                        { name: "description", content: "Breadcrumb component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/badge",
                        },
                        next: {
                          to: "/en/docs/react/components/button",
                        },
                      },
                    },
                  },
                  "/button": {
                    shortTitle: "Button",
                    head: {
                      meta: [
                        { title: "Button | Components | React | @nuco/core" },
                        { name: "description", content: "Button component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/breadcrumb",
                        },
                        next: {
                          to: "/en/docs/react/components/codeblock",
                        },
                      },
                    },
                  },
                  "/codeblock": {
                    shortTitle: "CodeBlock",
                    head: {
                      meta: [
                        { title: "CodeBlock | Components | React | @nuco/core" },
                        { name: "description", content: "CodeBlock component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/button",
                        },
                        next: {
                          to: "/en/docs/react/components/divider",
                        },
                      },
                    },
                  },
                  "/divider": {
                    shortTitle: "Divider",
                    head: {
                      meta: [
                        { title: "Divider | Components | React | @nuco/core" },
                        { name: "description", content: "Divider component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/codeblock",
                        },
                        next: {
                          to: "/en/docs/react/components/error",
                        },
                      },
                    },
                  },
                  "/error": {
                    shortTitle: "Error",
                    head: {
                      meta: [
                        { title: "Error | Components | React | @nuco/core" },
                        { name: "description", content: "Error component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/divider",
                        },
                        next: {
                          to: "/en/docs/react/components/h1",
                        },
                      },
                    },
                  },
                  "/h1": {
                    shortTitle: "H1",
                    head: {
                      meta: [
                        { title: "H1 | Components | React | @nuco/core" },
                        { name: "description", content: "H1 component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/error",
                        },
                        next: {
                          to: "/en/docs/react/components/h2",
                        },
                      },
                    },
                  },
                  "/h2": {
                    shortTitle: "H2",
                    head: {
                      meta: [
                        { title: "H2 | Components | React | @nuco/core" },
                        { name: "description", content: "H2 component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/h1",
                        },
                        next: {
                          to: "/en/docs/react/components/h3",
                        },
                      },
                    },
                  },
                  "/h3": {
                    shortTitle: "H3",
                    head: {
                      meta: [
                        { title: "H3 | Components | React | @nuco/core" },
                        { name: "description", content: "H3 component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/h2",
                        },
                        next: {
                          to: "/en/docs/react/components/h4",
                        },
                      },
                    },
                  },
                  "/h4": {
                    shortTitle: "H4",
                    head: {
                      meta: [
                        { title: "H4 | Components | React | @nuco/core" },
                        { name: "description", content: "H4 component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/h3",
                        },
                        next: {
                          to: "/en/docs/react/components/h5",
                        },
                      },
                    },
                  },
                  "/h5": {
                    shortTitle: "H5",
                    head: {
                      meta: [
                        { title: "H5 | Components | React | @nuco/core" },
                        { name: "description", content: "H5 component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/h4",
                        },
                        next: {
                          to: "/en/docs/react/components/h6",
                        },
                      },
                    },
                  },
                  "/h6": {
                    shortTitle: "H6",
                    head: {
                      meta: [
                        { title: "H6 | Components | React | @nuco/core" },
                        { name: "description", content: "H6 component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/h5",
                        },
                        next: {
                          to: "/en/docs/react/components/header",
                        },
                      },
                    },
                  },
                  "/header": {
                    shortTitle: "Header",
                    head: {
                      meta: [
                        { title: "Header | Components | React | @nuco/core" },
                        { name: "description", content: "Header component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/h6",
                        },
                        next: {
                          to: "/en/docs/react/components/input",
                        },
                      },
                    },
                  },
                  "/input": {
                    shortTitle: "Input",
                    head: {
                      meta: [
                        { title: "Input | Components | React | @nuco/core" },
                        { name: "description", content: "Input component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/header",
                        },
                        next: {
                          to: "/en/docs/react/components/li",
                        },
                      },
                    },
                  },
                  "/li": {
                    shortTitle: "Li",
                    head: {
                      meta: [
                        { title: "Li | Components | React | @nuco/core" },
                        { name: "description", content: "Li component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/input",
                        },
                        next: {
                          to: "/en/docs/react/components/navaccordion",
                        },
                      },
                    },
                  },
                  "/navaccordion": {
                    shortTitle: "NavAccordion",
                    head: {
                      meta: [
                        { title: "NavAccordion | Components | React | @nuco/core" },
                        { name: "description", content: "NavAccordion component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/li",
                        },
                        next: {
                          to: "/en/docs/react/components/option",
                        },
                      },
                    },
                  },
                  "/option": {
                    shortTitle: "Option",
                    head: {
                      meta: [
                        { title: "Option | Components | React | @nuco/core" },
                        { name: "description", content: "Option component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/navaccordion",
                        },
                        next: {
                          to: "/en/docs/react/components/pager",
                        },
                      },
                    },
                  },
                  "/pager": {
                    shortTitle: "Pager",
                    head: {
                      meta: [
                        { title: "Pager | Components | React | @nuco/core" },
                        { name: "description", content: "Pager component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/option",
                        },
                        next: {
                          to: "/en/docs/react/components/pagers",
                        },
                      },
                    },
                  },
                  "/pagers": {
                    shortTitle: "Pagers",
                    head: {
                      meta: [
                        { title: "Pagers | Components | React | @nuco/core" },
                        { name: "description", content: "Pagers component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/pager",
                        },
                        next: {
                          to: "/en/docs/react/components/select",
                        },
                      },
                    },
                  },
                  "/select": {
                    shortTitle: "Select",
                    head: {
                      meta: [
                        { title: "Select | Components | React | @nuco/core" },
                        { name: "description", content: "Select component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/pagers",
                        },
                        next: {
                          to: "/en/docs/react/components/ul",
                        },
                      },
                    },
                  },
                  "/ul": {
                    shortTitle: "Ul",
                    head: {
                      meta: [
                        { title: "Ul | Components | React | @nuco/core" },
                        { name: "description", content: "Ul component for React" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/react/components/select",
                        },
                        next: undefined,
                      },
                    },
                  },
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
                      to: "/en/docs/web-components/components/badge",
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
                          to: "/en/docs/web-components/components/badge",
                        },
                      },
                    },
                  },
                  "/badge": {
                    shortTitle: "Badge",
                    head: {
                      meta: [
                        { title: "Badge | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Badge component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/anchor",
                        },
                        next: {
                          to: "/en/docs/web-components/components/breadcrumb",
                        },
                      },
                    },
                  },
                  "/breadcrumb": {
                    shortTitle: "Breadcrumb",
                    head: {
                      meta: [
                        { title: "Breadcrumb | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Breadcrumb component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/badge",
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
                          to: "/en/docs/web-components/components/breadcrumb",
                        },
                        next: {
                          to: "/en/docs/web-components/components/codeblock",
                        },
                      },
                    },
                  },
                  "/codeblock": {
                    shortTitle: "CodeBlock",
                    head: {
                      meta: [
                        { title: "CodeBlock | Components | Web Components | @nuco/core" },
                        { name: "description", content: "CodeBlock component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/button",
                        },
                        next: {
                          to: "/en/docs/web-components/components/divider",
                        },
                      },
                    },
                  },
                  "/divider": {
                    shortTitle: "Divider",
                    head: {
                      meta: [
                        { title: "Divider | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Divider component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/codeblock",
                        },
                        next: {
                          to: "/en/docs/web-components/components/error",
                        },
                      },
                    },
                  },
                  "/error": {
                    shortTitle: "Error",
                    head: {
                      meta: [
                        { title: "Error | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Error component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/divider",
                        },
                        next: {
                          to: "/en/docs/web-components/components/h1",
                        },
                      },
                    },
                  },
                  "/h1": {
                    shortTitle: "H1",
                    head: {
                      meta: [
                        { title: "H1 | Components | Web Components | @nuco/core" },
                        { name: "description", content: "H1 component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/error",
                        },
                        next: {
                          to: "/en/docs/web-components/components/h2",
                        },
                      },
                    },
                  },
                  "/h2": {
                    shortTitle: "H2",
                    head: {
                      meta: [
                        { title: "H2 | Components | Web Components | @nuco/core" },
                        { name: "description", content: "H2 component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/h1",
                        },
                        next: {
                          to: "/en/docs/web-components/components/h3",
                        },
                      },
                    },
                  },
                  "/h3": {
                    shortTitle: "H3",
                    head: {
                      meta: [
                        { title: "H3 | Components | Web Components | @nuco/core" },
                        { name: "description", content: "H3 component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/h2",
                        },
                        next: {
                          to: "/en/docs/web-components/components/h4",
                        },
                      },
                    },
                  },
                  "/h4": {
                    shortTitle: "H4",
                    head: {
                      meta: [
                        { title: "H4 | Components | Web Components | @nuco/core" },
                        { name: "description", content: "H4 component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/h3",
                        },
                        next: {
                          to: "/en/docs/web-components/components/h5",
                        },
                      },
                    },
                  },
                  "/h5": {
                    shortTitle: "H5",
                    head: {
                      meta: [
                        { title: "H5 | Components | Web Components | @nuco/core" },
                        { name: "description", content: "H5 component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/h4",
                        },
                        next: {
                          to: "/en/docs/web-components/components/h6",
                        },
                      },
                    },
                  },
                  "/h6": {
                    shortTitle: "H6",
                    head: {
                      meta: [
                        { title: "H6 | Components | Web Components | @nuco/core" },
                        { name: "description", content: "H6 component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/h5",
                        },
                        next: {
                          to: "/en/docs/web-components/components/header",
                        },
                      },
                    },
                  },
                  "/header": {
                    shortTitle: "Header",
                    head: {
                      meta: [
                        { title: "Header | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Header component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/h6",
                        },
                        next: {
                          to: "/en/docs/web-components/components/input",
                        },
                      },
                    },
                  },
                  "/input": {
                    shortTitle: "Input",
                    head: {
                      meta: [
                        { title: "Input | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Input component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/header",
                        },
                        next: {
                          to: "/en/docs/web-components/components/li",
                        },
                      },
                    },
                  },
                  "/li": {
                    shortTitle: "Li",
                    head: {
                      meta: [
                        { title: "Li | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Li component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/input",
                        },
                        next: {
                          to: "/en/docs/web-components/components/navaccordion",
                        },
                      },
                    },
                  },
                  "/navaccordion": {
                    shortTitle: "NavAccordion",
                    head: {
                      meta: [
                        { title: "NavAccordion | Components | Web Components | @nuco/core" },
                        { name: "description", content: "NavAccordion component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/li",
                        },
                        next: {
                          to: "/en/docs/web-components/components/option",
                        },
                      },
                    },
                  },
                  "/option": {
                    shortTitle: "Option",
                    head: {
                      meta: [
                        { title: "Option | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Option component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/navaccordion",
                        },
                        next: {
                          to: "/en/docs/web-components/components/pager",
                        },
                      },
                    },
                  },
                  "/pager": {
                    shortTitle: "Pager",
                    head: {
                      meta: [
                        { title: "Pager | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Pager component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/option",
                        },
                        next: {
                          to: "/en/docs/web-components/components/pagers",
                        },
                      },
                    },
                  },
                  "/pagers": {
                    shortTitle: "Pagers",
                    head: {
                      meta: [
                        { title: "Pagers | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Pagers component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/pager",
                        },
                        next: {
                          to: "/en/docs/web-components/components/select",
                        },
                      },
                    },
                  },
                  "/select": {
                    shortTitle: "Select",
                    head: {
                      meta: [
                        { title: "Select | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Select component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/pagers",
                        },
                        next: {
                          to: "/en/docs/web-components/components/ul",
                        },
                      },
                    },
                  },
                  "/ul": {
                    shortTitle: "Ul",
                    head: {
                      meta: [
                        { title: "Ul | Components | Web Components | @nuco/core" },
                        { name: "description", content: "Ul component for Web Components" },
                      ],
                    },
                    info: {
                      pagers: {
                        prev: {
                          to: "/en/docs/web-components/components/select",
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

export const ServerRoute = createServerFileRoute("/api/page-info").methods({
  GET: async ({ request }) => {
    const pageInfo = getValue(request.url);

    if (!pageInfo) {
      return json({ error: "Page not found" }, { status: 404 });
    }

    return json(pageInfo);
  },
});
