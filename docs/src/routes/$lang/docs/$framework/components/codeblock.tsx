import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/$lang/docs/$framework/components/codeblock",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/$lang/docs/$framework/components/codeblock"!</div>;
}
