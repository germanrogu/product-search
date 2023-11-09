import React from "react";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const handleSearch = (searchQuery) => {
    console.log("Realizar búsqueda con:", searchQuery);
  };
  return (
    <div>
      <Navbar onSearch={handleSearch} />
    </div>
  );
};
