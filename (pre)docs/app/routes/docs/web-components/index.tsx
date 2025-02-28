import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/docs/web-components/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/docs/web-components/"!</div>
}
