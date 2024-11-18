import React from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../PokemonCard/PokemonCard';

interface PokemonListProps {
  pokemons: { name: string; sprites: { sprites: { front_default: string } }[] }[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {pokemons.map((pokemon) => {
        // Verifica se existem sprites válidos e pega a URL da imagem
        const spriteData = pokemon.sprites[0]?.sprites?.front_default;

        return (
          <Link
            to={`/pokemon/${pokemon.name}`}
            key={pokemon.name}
            className="block"
          >
            <PokemonCard
              name={pokemon.name}
              sprite={spriteData || 'https://via.placeholder.com/96'} // URL de fallback
            />
          </Link>
        );
      })}
    </div>
  );
};

export default PokemonList;
