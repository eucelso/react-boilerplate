interface PokemonCardProps {
    name: string;
    sprite: string;
  }
  
  const PokemonCard: React.FC<PokemonCardProps> = ({ name, sprite }) => {
    return (
      <div className="p-4 border rounded-lg text-center">
        <img src={sprite} alt={name} className="mx-auto mb-2 w-20 h-20" />
        <p className="capitalize font-bold">{name}</p>
      </div>
    );
  };
  
  export default PokemonCard;
  