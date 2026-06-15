import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shop/$productId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { productId } = Route.useParams();
  return <div>Hello "/products/$productId"!</div>;
}
