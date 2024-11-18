import React, { useState } from 'react';
import { usePokemonList } from '../hooks/usePokemonList';
import SearchBar from '../components/SearchBar/SearchBar';
import PokemonList from '../components/PokemonList/PokemonList';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { pokemons, loading } = usePokemonList(20, 0);
  const [suggestions, setSuggestions] = useState<{ name: string }[]>([]); // Sugestões para o menu dropdown
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;

  const handleSearch = (query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    // Filtra as sugestões com base no termo digitado
    const filteredSuggestions = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filteredSuggestions.slice(0, 5)); // Limita a 5 sugestões
  };

  const handleSelectPokemon = (name: string) => {
    setSuggestions([]); // Limpa as sugestões ao selecionar
    navigate(`/pokemon/${name}`); // Navega para a página de detalhes
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} suggestions={suggestions} onSelect={handleSelectPokemon} />
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default Home;
