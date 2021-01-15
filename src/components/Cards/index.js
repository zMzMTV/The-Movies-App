import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import "./index.css";

import Loader from "../Loaders";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=5d80720f4844c3f9ed288f4027193659&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  console.log(data);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="border-input text-center">
        <input
          type="text"
          placeholder="Looking for a movie ?"
          className="search mt-3 mb-5"
          value={search}
          onChange={handleChange}
        />
      </div>

      <div className="total d-flex flex-wrap">
        {data.results
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((item, index) => {
            return (
              <>
                <div className="cards m-3 d-flex flex-column text-center">
                  <Link to={`/movie/${item.id}`}>
                    <div>
                      <img
                        className="poster mt-2"
                        src={url + item.poster_path}
                        alt="cover of the film"
                      />
                    </div>

                    <div className="description mt-2">
                      <p key={index} className="mb-2">
                        {item.title}
                      </p>
                      <p>
                        {(item.vote_average / 2).toFixed(1)}/5
                        <FontAwesomeIcon
                          icon="star"
                          color="gold"
                          className="ml-1"
                        />
                      </p>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Cards;
