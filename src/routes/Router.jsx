import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductDetail } from "../pages/ProductDetail";
import { SearchResults } from "../pages/SearchResults";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='items' element={<SearchResults />}>
          <Route path=':id' element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
