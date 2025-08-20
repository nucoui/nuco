import { MDX_COMPONENTS } from "@/constants/MDX_COMPONENTS";
import { MDXProvider } from "@mdx-js/react";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/$lang/test")({
  component: RouteComponent,
});

const Mdx = React.lazy(() => import("./index.mdx").then(mod => ({ default: mod.default })));

function RouteComponent() {
  return (
    <main>
      <MDXProvider components={MDX_COMPONENTS}>
        <Mdx components={MDX_COMPONENTS} />
      </MDXProvider>
    </main>
  );
}
