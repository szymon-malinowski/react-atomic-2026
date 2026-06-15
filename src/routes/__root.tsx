import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '../components/organisms/navbar'
import Footer from '../components/organisms/footer'

const RootLayout = () => (
  <>
  <header>
  <Navbar>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/impressum" className="[&.active]:font-bold">Impressum
      </Link>
    </div>
    </Navbar>
  </header>
  <main>
    <Outlet />
  </main>
  <Footer />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })