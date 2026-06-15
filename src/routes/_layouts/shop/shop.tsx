import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layouts/shop/shop")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
