import axios from "axios";
import React from "react";
import {
  DependencyInversionPrinciple,
  IFetchPokemons,
  IFetchPokemonsAdapter,
  IPokemon,
} from "../../src/pages/DI";

const handleFetchPokemons: IFetchPokemons = async (url, adapter) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return adapter(data);
    });
};

const handleFetchPokemonsAsync: IFetchPokemons = async (url, adapter) => {
  const rawData = await fetch(url);
  const response = await rawData.json();
  const data = adapter(response);
  return data;
};

const handleFetchPokemonsAxios: IFetchPokemons = async (
  url: string,
  adapter
) => {
  const { data: rawData } = await axios.get<{ results: IPokemon[] }>(url);
  const data = adapter(rawData);
  return data;
};

export const fetchPokemonAdapter: IFetchPokemonsAdapter = (data) => {
  return data.results.map((res) => ({ id: res.id, name: res.name }));
};

const index = () => {
  return (
    <DependencyInversionPrinciple
      fetchPokemons={handleFetchPokemonsAxios}
      adapter={fetchPokemonAdapter}
    />
  );
};

export default index;
