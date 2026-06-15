import { createFileRoute } from "@tanstack/react-router";
import ProductCard from "../../../components/organisms/product.card";

export const Route = createFileRoute("/_layouts/shop/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <ProductCard title="Nike" description={"Das ist ein Schuh."} />
      <ProductCard title="Adiddas" description={"Das ist ein Schuh."} />
      <ProductCard title="Rebook" description={"Das ist ein Schuh."} />
    </>
  );
}
