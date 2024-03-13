import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonList, Layout, PokemonDetails } from "./components";

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}