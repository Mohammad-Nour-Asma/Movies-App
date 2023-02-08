import React, { useEffect, useState } from "react";
import Rating from "../components/Rating";
import "../scss/movieDetails.scss";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const par = useParams();

  const url = `https://www.omdbapi.com/?i=${par.id}&apikey=${process.env.REACT_APP_MY_API_KEY}`;
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [faild, setFaild] = useState(false);

  const getDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setDetails(data);
      setLoading(false);
    } catch (exeption) {
      setLoading(false);
      setFaild(true);
    }
  };

  useEffect(() => {
    getDetails();
  }, [par.id]);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }
  if (faild) {
    return <p className="loading">Faild To Fetch Data</p>;
  }
  return (
    <section className="container">
      <div className="details">
        <div className="info ">
          <h1 className="title">{details.Title}</h1>
          <p className="plot">{details.Plot}</p>
          <p className="duration">{details.Runtime}</p>
          <Rating rate={details.imdbRating} />
        </div>
        <div className="img-container">
          <img src={details.Poster} alt="poster" />
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
