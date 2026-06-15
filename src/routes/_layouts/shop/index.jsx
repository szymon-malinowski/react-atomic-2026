import { createFileRoute } from "@tanstack/react-router";
import ProductCard from "../../../components/organisms/product.card";

export const Route = createFileRoute("/shop/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <ProductCard title="Nike" />
    </>
  );
}
