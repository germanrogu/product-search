import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );

  function NotFound() {
    return <Navigate to='/' />;
  }
};

export default AppRouter;
