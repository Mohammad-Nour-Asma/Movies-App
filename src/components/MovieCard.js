import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleToFav } from "../features/favorite/FavoriteSlice";
import { makeFav } from "../features/data/dataSlice";

const MovieCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="movie-card">
      <Link to={`/details/${item.imdbID}`} state={{ item: item }}>
        <div className="poster">
          <img src={item.Poster} alt="poster" />
        </div>
        <div className="info">
          <div>
            <h4 className="name">{item.Title}</h4>
            <h5 className="year">Year: {item.Year}</h5>
          </div>
        </div>
      </Link>
      <button
        className="heart"
        onClick={() => {
          dispatch(makeFav(item));
          dispatch(toggleToFav(item));
        }}
      >
        <FaHeart className={item.isFav ? "  red" : ""} />
      </button>
    </div>
  );
};

export default MovieCard;
