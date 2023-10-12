import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  console.log(pokemon);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <figure className="card">
      <img
        className="iconPkmn"
        src="https://www.pokencyclopedia.info/sprites/menu-icons/ico-a_gbc/ico-a_2_100.gif"
      />
      <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
      <div className="cardBody">
        {pokemon.imgSrc ? (
          <img className="imgPkmn" src={pokemon.imgSrc} className="card-img" />
        ) : (
          <p>???</p>
        )}
      </div>
    </figure>
  );
}

PokemonCard.PropTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }),
};

export default PokemonCard;
