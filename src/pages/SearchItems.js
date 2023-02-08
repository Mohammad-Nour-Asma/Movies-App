import React from "react";
import { useParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import "../scss/home.scss";

const SearchItems = () => {
  const { title } = useParams();
  return (
    <main className="home">
      <MovieList search={title} section={title} />
    </main>
  );
};

export default SearchItems;
