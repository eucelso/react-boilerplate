import { useQuery } from '@apollo/client';
import { GET_POKEMON_DETAILS } from '../graphql/queries/GET_POKEMON_DETAILS';

export const usePokemonDetails = (id: number) => {
  const { data, loading, error } = useQuery(GET_POKEMON_DETAILS, {
    variables: { id },
  });

  return {
    pokemon: data?.pokemon_v2_pokemon_by_pk || null,
    loading,
    error,
  };
};
