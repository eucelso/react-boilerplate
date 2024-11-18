import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PokemonDetails: React.FC = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('name', name)
    if (!name) {
      setError('Nome do Pokémon não fornecido!');
      setLoading(false);
      return;
    }

    const fetchPokemonDetails = async () => {
      try {
        console.log(`Parâmetro recebido na rota: ${name}`);
        const normalizedName = name.toLowerCase(); // Normalizar para letras minúsculas
        const url = `https://pokeapi.co/api/v2/pokemon/${normalizedName}`;
        console.log(`URL chamada: ${url}`);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Pokémon não encontrado!');
        }

        const data = await response.json();
        console.log('Dados do Pokémon:', data);

        setPokemon(data);
      } catch (err) {
        console.error('Erro ao buscar detalhes do Pokémon:', err);
        setError('Erro ao carregar os detalhes do Pokémon');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
      <div className="mt-4">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-48 h-48" />
        <p>Altura: {pokemon.height} decímetros</p>
        <p>Peso: {pokemon.weight} hectogramas</p>
        <p>Tipos: {pokemon.types.map((type: any) => type.type.name).join(', ')}</p>
      </div>
      <button onClick={() => navigate('/')}>Voltar</button>
    </div>
  );
};

export default PokemonDetails;
