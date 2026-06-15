import type { ReactNode } from "react";

export default function Navbar({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="navbar bg-red-600">{children}</nav>
    </>
  );
}
