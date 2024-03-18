import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ movies }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movies.genre_ids.length; i++) {
      switch (movies.genre_ids[i]) {
        case 28:
          genreArray.push("Action");
          break;
        case 12:
          genreArray.push("Aventure");
          break;
        case 16:
          genreArray.push("Animation");
          break;
        case 35:
          genreArray.push("Comédie");
          break;
        case 80:
          genreArray.push("Policier");
          break;
        case 99:
          genreArray.push("Documentaire");
          break;
        case 18:
          genreArray.push("Drame");
          break;
        case 10751:
          genreArray.push("Famille");
          break;
        case 14:
          genreArray.push("Fantasty");
          break;
        case 36:
          genreArray.push("Histoire");
          break;
        case 27:
          genreArray.push("Horreur");
          break;
        case 10402:
          genreArray.push("Musique");
          break;
        case 9648:
          genreArray.push("Mystère");
          break;
        case 10749:
          genreArray.push("Romance");
          break;
        case 878:
          genreArray.push("Science-Fiction");
          break;
        case 10770:
          genreArray.push("Téléfilm");
          break;
        case 53:
          genreArray.push("Thriller");
          break;
        case 10752:
          genreArray.push("Guerre");
          break;
        case 37:
          genreArray.push("Western");
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(movies.id.toString())) {
      storedData.push(movies.id);
      window.localStorage.movies = storedData;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");

    let newData = storedData.filter((id) => id !== movies.id);
    window.localStorage.movies = newData;
  };

  return (
    <div className="card">
      <img
        src={
          movies.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movies.poster_path
            : "./img/poster.jpg"
        }
        alt={`affiche ${movies.title}`}
      />
      <h2>{movies.title}</h2>
      {movies.release_date ? (
        <h5>Sorti le : {dateFormater(movies.release_date)}</h5>
      ) : null}
      <h4>
        {movies.vote_average.toFixed(1)}/10{" "}
        <span>
          <FontAwesomeIcon icon={faStar} color="yellow" />
        </span>
      </h4>
      <h3>Genres</h3>
      <ul>
        {movies.genre_ids
          ? genreFinder()
          : movies.genres.map((genre) => <li key={genre}>{genre.name}</li>)}
      </ul>
      {movies.overview ? <h3>Synopsis</h3> : ""}
      <p>{movies.overview}</p>
      {movies.genre_ids ? (
        <button className="btn" onClick={() => addStorage()}>
          Ajouter aux coups de coeurs
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            deleteStorage();
          }}
        >
          Supprimer de la liste
        </button>
      )}
    </div>
  );
};

export default Card;
