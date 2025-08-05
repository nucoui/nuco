/// <reference types="vite/client" />

import { DefaultCatchBoundary } from "@/components/error/DefaultCatchBoundary";
import { NotFound } from "@/components/error/NotFound";
import { RootHeader } from "@/components/layouts/Header/Header";
import { RootFooter } from "@/components/layouts/RootFooter/RootFooter";
import rootCss from "@/routes/__root.scss?url";
import resetCss from "@/styles/reset.css?url";
import { seo } from "@/utils/seo";
import { ColorSchemeProvider } from "@nuco/react";
import nucoCss from "@nuco/variable/css.css?url";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
      },
      ...seo({
        title:
          "@nuco | Design system library that Transcends Framework boundaries",
        description: `@nuco is a UI library based on the concept of Transcends Framework boundaries. It is not bound by UI/JS frameworks and is guaranteed to work with all frameworks.`,
      }),
    ],
    links: [
      { rel: "stylesheet", href: resetCss },
      { rel: "stylesheet", href: nucoCss },
      { rel: "stylesheet", href: rootCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/icon-light-transparent.svg" },
    ],
    scripts: [],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <ColorSchemeProvider>
      <html>
        <head>
          <HeadContent />
        </head>
        <body>
          <div id="root-header">
            <RootHeader />
          </div>
          {children}
          <div id="root-footer">
            <RootFooter />
          </div>
          <TanStackRouterDevtools position="bottom-right" />
          <Scripts />
        </body>
      </html>
    </ColorSchemeProvider>
  );
}
