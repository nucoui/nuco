import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/docs/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/docs/"!
      {
        Array.from({ length: 100 }, (_, i) => (
          <br key={i} />
        ))
      }
    </div>
  );
}
