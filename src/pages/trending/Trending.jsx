import { useState } from "react";
import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";
import { Trend } from "../../shared/ui/Trend/Trend";

export const Trending = () => {
  const [selectedFilmId, setSelectedFilmId] = useState(null);

  const handleFilmSelect = (filmId) => {
    if (selectedFilmId === filmId) {
      setSelectedFilmId(null);
    } else {
      setSelectedFilmId(filmId);
    }
  };

  return (
    <>
      <Header />
      <div className="trending">
        <div className="title">Trending at this moment</div>
        <div className="trending-list">
          {films.map((film) => (
            <div
              key={film.id}
              className={`trending-item ${
                selectedFilmId === film.id ? "active" : "inactive"
              }`}
              onClick={() => handleFilmSelect(film.id)}
            >
              <Film film={film} handleToggleFavorite={() => {}} />
            </div>
          ))}
        </div>
        {selectedFilmId && (
          <div className="main-trend">
            <Trend filmId={selectedFilmId} />
          </div>
        )}
      </div>
    </>
  );
};
