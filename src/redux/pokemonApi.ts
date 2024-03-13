import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<any, any>({
      query: ({ offset, limit }) => `pokemon?offset=${offset}&limit=${limit}`
    }),
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`
    })
  })
})

export const { useGetPokemonsQuery, useGetPokemonByNameQuery, useLazyGetPokemonsQuery } = pokemonApi;