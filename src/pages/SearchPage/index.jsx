import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import axios from "../../api/axios.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(query.get("q"), 500);
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "http://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  className="movie__column-poster"
                >
                  <img src={movieImageUrl} alt="" className="movie__poster" />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>
            Your search for "{debouncedSearchTerm}" did not have any matches.
          </p>
          <p>Suggestions:</p>
          <ul>
            <li>Try different keywords</li>
          </ul>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}
