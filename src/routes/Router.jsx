import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductDetail } from "../pages/ProductDetail";
import { SearchResults } from "../pages/SearchResults";
import { Navbar } from "../components/Navbar";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='items' element={<SearchResults />}>
          <Route path=':id' element={<ProductDetail />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );

  function NotFound() {
    return <Navigate to='/' />;
  }
};

export default AppRouter;
