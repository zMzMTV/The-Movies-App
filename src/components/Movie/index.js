import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./index.css";

import Loader from "../Loaders";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5d80720f4844c3f9ed288f4027193659&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className=" container d-flex flex-column">
        <h1 className="text-center movie-title mb-3">{data.title}</h1>
        <p className="text-center mb-3">({data.original_title})</p>
        <p className="text-center">
          {(data.vote_average / 2).toFixed(1)}/5
          <FontAwesomeIcon icon="star" color="gold" className="ml-1 mr-1" />(
          {data.vote_count} votes)
        </p>
        <div className="text-center mt-3">
          <img
            className="image mr-5"
            src={url + data.poster_path}
            alt="cover of the film"
          />
        </div>

        <p className=" mt-3 mb-3 size">
          <u>Synopsis :</u>
        </p>
        <span className="overview">{data.overview}</span>
        <div className="text-center mb-5">
          <img
            className="image mt-5"
            src={url + data.backdrop_path}
            alt="cover of the film"
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
