import { Home } from "../pages/Home";
import { ProductDetail } from "../pages/ProductDetail";
import { SearchResults } from "../pages/SearchResults";

const routes = [
  { path: "/", element: <Home /> },
  { path: "items/*", element: <SearchResults /> },
  { path: "items/:id", element: <ProductDetail /> },
];

export { routes };
