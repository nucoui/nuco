import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/")({
  // loader: async ({ params }) => {
  //   const { lang } = params;
  // },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/$lang/index"!</div>;
}
