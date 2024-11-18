import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  suggestions: { name: string }[];
  onSelect: (name: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, suggestions, onSelect }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative mb-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar Pokémon"
        className="border p-2 w-full rounded-md text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 w-full mt-1 z-10 rounded-md shadow-md">
          {suggestions.map((pokemon) => (
            <li
              key={pokemon.name}
              className="p-2 cursor-pointer bg-blue-700 text-blue-100 hover:bg-blue-100 hover:text-blue-700 transition"
              onClick={() => onSelect(pokemon.name)} // Seleciona o Pokémon
            >
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
