import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shop/product/id/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/shop/product/id/$"!</div>
}
