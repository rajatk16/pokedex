import { FC, useEffect } from "react";

import { useLazyGetPokemonsQuery } from "../redux";
import { Loader } from "./Loader";
import { PokeCard } from "./PokeCard";


export const PokemonList: FC = () => {
  const [getPokemons, results, previousQueryInfo ] = useLazyGetPokemonsQuery();
  useEffect(() => {
    getPokemons({
      offset: 0,
      limit: 6
    })
  }, [getPokemons])
  
  return (
    results.error ? (
      <>
          Oh no, there was an error
        </>
      ) : results.isLoading ? (
        <Loader />
      ) : results.data && (
        <div className="w-full flex justify-center items-center gap-10 flex-col">
          <div className="grid justify-items-center grid-cols-3 gap-10">
            {results.data.results.map((pokemon: any) => (
              <PokeCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
          <div className="flex">
            {results.data.previous && (
              <button
                disabled={!results.data.previous}
                onClick={() => getPokemons({
                  limit: 6,
                  offset: previousQueryInfo.lastArg.offset - 6
                })}  
                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Prev
              </button>
            )}
            {results.data.next && (
              <button
                disabled={!results.data.next}
                className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                onClick={() => getPokemons({
                  limit: 6,
                  offset: previousQueryInfo.lastArg.offset + 6
                })}
              >
                Next
              </button>
            )}  
          </div>
        </div> 
      )
    );
  }