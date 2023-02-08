import React from "react";
import { Link } from "react-router-dom";
import "../scss/myMovie.scss";
const MyMovie = () => {
  const fav = JSON.parse(localStorage.getItem("fav"));
  if (!fav || fav.length === 0) {
    return (
      <div>
        <h3 className="heading">My Favorite</h3>
        <div className="con container">
          <h2>Empty List</h2>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h3 className="heading">My Favorite</h3>
      <div className="con container">
        {fav.map((item, index) => {
          return (
            <div className="item ">
              <div className="info">
                <Link to={`/details/${item.imdbID}`} state={{ item: item }}>
                  {item.Title}
                </Link>
                <p>{item.Year}</p>
              </div>
              <div>
                {" "}
                <img src={item.Poster} alt="poster" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyMovie;
