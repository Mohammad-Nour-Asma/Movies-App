import React from "react";

import "@splidejs/react-splide/css";
import MovieSlider from "../components/MovieSlider";
import "../scss/home.scss";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <main className="home">
      <MovieSlider />
      <MovieList search="avengers" section="Movies" />
    </main>
  );
};

export default Home;
