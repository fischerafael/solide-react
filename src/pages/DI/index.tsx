import React, { useEffect, useState } from "react";

export interface IPokemon {
  name: string;
  id: string;
}

export interface IFetchPokemonsAdapter {
  (payload: { results: IPokemon[] }): IPokemon[];
}

export interface IFetchPokemons {
  (url: string, adapter: IFetchPokemonsAdapter): Promise<IPokemon[]>;
}

export interface IDependencyInversionPrinciple {
  fetchPokemons: IFetchPokemons;
  adapter: IFetchPokemonsAdapter;
}

const url = `https://pokeapi.co/api/v2/pokemon`;

export const DependencyInversionPrinciple = ({
  fetchPokemons,
  adapter,
}: IDependencyInversionPrinciple) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    (async () => {
      const pokemons = await fetchPokemons(url, adapter);
      setPokemons(pokemons);
    })();
  }, []);

  return (
    <div>
      <p>Pokemons</p>
      <ul>
        {pokemons?.map((pokemon) => (
          <li key={pokemon.id}>
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
