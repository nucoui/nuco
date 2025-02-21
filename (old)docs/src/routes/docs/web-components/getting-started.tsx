import { H2 } from "@nuco/react";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useHead } from "unhead";
import { getPageInfo } from "../../../utils/getPageInfo";

export const Route = createFileRoute("/docs/web-components/getting-started")({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const pageInfo = getPageInfo(location.pathname);

  useHead({
    title: pageInfo.title,
    meta: [
      {
        name: "description",
        content: pageInfo.description,
      },
    ],
  },
  );

  return (
    <>
      <H2>Getting Started with Web Components</H2>
      <p>test</p>
    </>
  );
}
