import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { getItems } from "../features/data/dataSlice";
import { useDispatch, useSelector } from "react-redux";

const MovieList = ({ section }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems("avengers"));
  }, []);
  const { data } = useSelector((store) => {
    return store.data;
  });
  console.log(data);

  return (
    <section className="container">
      <h2 className=" heading">{section}</h2>
      <div className="movie-list">
        {data.map((item, index) => (
          <MovieCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
