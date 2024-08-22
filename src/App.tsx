import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import SearchScreen from "./components/SearchScreen/SearchScreen";
import PokemonDataPage from "./components/PokemonDataPage/PokemonDataPage";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PokemonDataPage></PokemonDataPage>
      <SearchScreen></SearchScreen>
    </>
  );
}

export default App;
