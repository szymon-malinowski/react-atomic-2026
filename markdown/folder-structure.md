src/
├── components/
│   ├── atoms/          # Button, Input, Badges (DaisyUI Klassen)
│   ├── molecules/      # SearchBar, Card
│   └── organisms/      # Navbar, Footer, ProductGrid
├── routes/             # TanStack Router dateibasiertes Routing (empfohlen)
│   ├── __root.tsx      # Haupt-Layout (Nav, Outlet, Footer)
│   ├── index.tsx       # Startseite
│   ├── about.tsx       # AboutMe
│   ├── impressum.tsx   # Impressum
│   └── dashboard/      # Weiteres Layout (z.B. für einen geschützten Bereich)
│       ├── _layout.tsx # Das zweite geforderte Layout
│       ├── index.tsx   # Dashboard Startseite
│       ├── $id.tsx     # 2. Dynamische Route
│       └── products.tsx# 3. Route mit Search Params
│       └── detail.$id.tsx # 4. Dynamische Route MIT Search Params
├── main.tsx
└── index.css           # Tailwind + DaisyUI Setup