import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

export default function DetailPage() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState({});

  console.log("movieId", movieId);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovies(request.data);
    }
    fetchData();
  }, [movieId]);

  if (!movies) return <div>...loading</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`http://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
}
