import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import Footer from "../components/organisms/footer";
import Navbar from "../components/organisms/navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <header>
        <Navbar>
          <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
            <Link to="/impressum" className="[&.active]:font-bold">
              Impressum
            </Link>
            <Link to="/shop" className="[&.active]:font-bold">
              Shop
            </Link>
          </div>
        </Navbar>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}
