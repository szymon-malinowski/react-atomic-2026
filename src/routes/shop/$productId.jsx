import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shop/$productId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/products/$productId"!</div>
}
