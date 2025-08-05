import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$lang/docs/$framework/overview')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$lang/docs/$framework/overview"!</div>
}
