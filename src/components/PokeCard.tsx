import { FC, PropsWithChildren } from "react"
import { useGetPokemonByNameQuery } from "../redux"
import { Loader } from "./Loader";
import { Link } from "react-router-dom";

interface PokeCardProps {
  pokemon: any
}

export const PokeCard: FC<PropsWithChildren<PokeCardProps>> = ({ pokemon }) => {
  const { data, isLoading, error } = useGetPokemonByNameQuery(pokemon.name);
  return (
    <>
      <Link
        to={`pokemon/${pokemon.name}`}
        className="w-6/12 flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ">
        {isLoading && (
          <Loader />
        )}
        {data && (
          <img className="rounded-t-lg self-center" src={data.sprites.other["official-artwork"].front_default ?? ''} alt={pokemon.name} />
        )}
        {error && (
          <></>
        )}
        <div className="p-5">
          <h5 className="mb-2 text-center font-bold tracking-tight text-gray-900 dark:text-white capitalize">{pokemon.name}</h5>
        </div>
      </Link>
    </>
  )
}