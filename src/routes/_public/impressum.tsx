import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/impressum')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/impressum"!</div>
}
