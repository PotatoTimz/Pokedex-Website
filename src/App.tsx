import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import SearchScreen from "./components/SearchScreen/SearchScreen";
import PokemonDataPage from "./components/PokemonDataPage/PokemonDataPage";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<SearchScreen />}></Route>
        <Route path="/pokemon" element={<SearchScreen />}></Route>
        <Route path="/pokemon/:id" element={<PokemonDataPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
