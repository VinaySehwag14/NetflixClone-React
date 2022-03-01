import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  //* image url
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      console.log(request.data, "this is req data");
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);
  //   console.log(movies, "this is movies");
  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    },
  };

  //*for setting trailer
  const onHandleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //*sometimes it is giving undefined movie name thats why ""
      movieTrailer(movie?.title || "")
        .then((url) => {
          //*https://www.youtube.com/watch?v=R9I85RhI7Cg we want after 'v' digits
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => onHandleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movies.name}
              />
            )
        )}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
