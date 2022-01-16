import React from "react";
import axios from "axios";

import { BASE_URL } from "utils/requests";
import Pagination from "components/pagination/Pagination";
import MovieCard from "components/movie-card/MovieCard";
import { MoviePage } from "types/movie";

import "./Listing.css";

function Listing() {
  const [pageNumber, setPageNumber] = React.useState(0);
  const [page, setPage] = React.useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
      .then((response) => {
        const data = response.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber])

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          {page.content.map((movie) => {
            return (
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard key={movie.id} movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Listing;
