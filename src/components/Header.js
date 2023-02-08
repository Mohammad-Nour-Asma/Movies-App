import React, { useEffect } from "react";
import { BiMoviePlay } from "react-icons/bi";
import { ImHeart } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link, } from "react-router-dom";
import { updateTotal } from "../features/favorite/FavoriteSlice";
import "../scss/header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { total } = useSelector((store) => {
    return store.fav;
  });
  useEffect(() => {
    dispatch(updateTotal(JSON.parse(localStorage.getItem("fav"))?.length ?? 0));
  }, []);

  return (
    <div className="header">
      <Link to="/" className="logo">
        Movies
        <span>
          <BiMoviePlay />
        </span>
      </Link>
      <div className="search-fav">
        <Link className="fav" to="/favorite">
          <ImHeart />
          <div className="times">{total}</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
