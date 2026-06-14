import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/detail/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/detail/$id"!</div>
}
