import React from "react";
import "./Card.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

function Card({ movieObj }) {
  // if(Object.keys(movieObj).length === 0) return;
  const title = movieObj.Title;
  const YOR = movieObj.Year;
  const watchTime = movieObj.Runtime;
  const genre = movieObj.Genre.split(",");
  const language = movieObj.Language;
  const posterLink = movieObj.Poster;
  const rating = movieObj.imdbRating;
  const plot = movieObj.Plot;

  console.log(genre);
  return (
    <>
      <figure className="movie">
        <div className="movie__hero">
          <img
            src={posterLink.length > 0 ? posterLink : ""}
            alt={`${title}'s poster`}
            className="movie__img"
          />
        </div>
        <div className="movie__content">
          <div className="movie__title">
            <h1 className="heading__primary">
              {title} <i className="fas fa-fire"></i>
            </h1>
            {genre.length === 0 ? (
              <></>
            ) : (
              genre.map((ele, idx) => {
                return (
                  <div
                    key={idx + 1}
                    className={`movie__tag movie__tag--${idx + 1}`}
                  >
                    {ele}
                  </div>
                );
              })
            )}
          </div>
          <p className="movie__description">{plot}</p>
          <div className="movie__details">
            <p className="movie__detail">
              <span className="icons icons-red">
                <i className="fas fa-camera-retro"></i>{" "}
              </span>
              Ratings: {rating}/10
            </p>
            <p className="movie__detail">
              <span className="icons icons-grey">
                <i className="fas fa-clock"></i>{" "}
              </span>
              {watchTime}
            </p>
            <p className="movie__detail">
              <span className="icons icons-yellow">
                <i className="fas fa-file-invoice-dollar"></i>
              </span>
              {language}
            </p>
            <p className="movie__detail">
              <span className="icons icons-yellow">
                <i className="fas fa-file-invoice-dollar"></i>
              </span>
              {YOR}
            </p>
          </div>
        </div>
        <div className="movie__price"><button style={{backgroundColor: "rgba(255,255,255,0)", border:"none"}}><FavoriteIcon style={{color:"red", background:"transparent"}}/></button></div>
        <div className="movie__price"><button style={{backgroundColor: "rgba(255,255,255,0)", border:"none"}}><CloseIcon style={{color:"black", background:"transparent"}}/></button></div>
      </figure>
    </>
  );
}

export default Card;
