import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../graphql/queries/GET_POKEMON_LIST';

export const usePokemonList = (limit: number, offset: number) => {
  const { data, loading, error } = useQuery(GET_POKEMON_LIST, {
    variables: { limit, offset },
  });

  return {
    pokemons: data?.pokemon_v2_pokemon || [],
    loading,
    error,
  };
};
