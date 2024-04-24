import PropTypes from "prop-types";
import { FavouriteIcon } from "../../icons/Favourites/FavouriteIcon";
import { HeartIcon } from "../../icons/Sidebar/HeartIcon";


export const Film = ({ film, handleToggleFavorite }) => {
  const handleFavoriteToggle = () => {
    handleToggleFavorite(film.id); 
  };

  return (
    <div className="film">
      <img className="film-image" src={film.image} alt={film.title} />
      <div className="film-title">{film.title}</div>
      <div className="film-details">
        {film.year} | {film.genre}
      </div>
      <button className="btn" onClick={handleFavoriteToggle}>
        {film.isFavorited ? (
          <HeartIcon className="film-icon" />
        ) : (
          <FavouriteIcon className="film-icon" />
        )}
      </button>
    </div>
  );
};

Film.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    isFavorited: PropTypes.bool.isRequired,
  }).isRequired,
  handleToggleFavorite: PropTypes.func.isRequired,
};



{
  /* <div className="film-item">
      <img className="film-image" src={film.image} alt={film.title} />
      <div className="film-title">{film.title}</div>
      <div className="film-details">
        {film.year} | {film.genre}
      </div>
      <button className="btn" onClick={handleToggleFavorite}>
        {isFavorited ? (
          <HeartIcon className="favorite-icon" />
        ) : (
          <FavouriteIcon className="favorite-icon" />
        )}
      </button>
    </div>
  ); */
}
