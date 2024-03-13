import { FC } from "react";
import { useParams } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import { Loader } from "./Loader";
import { useGetPokemonByNameQuery } from "../redux";
import { listFormatter } from "../utils/listFormatter";

export const PokemonDetails: FC = () => {
  const { pokemonName } = useParams();
  const { data, isLoading, error } = useGetPokemonByNameQuery(pokemonName!)

  return (
    error ? (
      <div>
        Oh no! Something went wrong!
      </div>
    ) : isLoading ? (
      <Loader />
    ) : data && (
      <div className="flex flex-col w-full h-screen">
        <div>
          <h2 className="text-3xl capitalize text-center">{data.name}</h2>
        </div>
        <div className="columns-4 mt-10">
          <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />
          <ul className="grid gap-10">
            <li>
              Rank #{data.id}
            </li>
            <li>
              Height: {data.height}
            </li>
            <li>
              Weight: {data.weight}
            </li>
            <li>
              Types: {listFormatter.format(data.types.map((item: any) => item.type.name))}
            </li>
          </ul>
          <ReactAudioPlayer
            src={data.cries.latest}
            controls  
          />    
        </div>    
      </div>
    )
  )
}