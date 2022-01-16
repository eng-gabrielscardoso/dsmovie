import React from 'react';
import axios from 'axios';

import { BASE_URL } from 'utils/requests';
import Pagination from 'components/pagination/Pagination';
import MovieCard from 'components/movie-card/MovieCard';
import { MoviePage } from 'types/movie';

import './Listing.css';

function Listing(){
  const [ pageNumber, setPageNumber ] = React.useState(0);

  React.useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
      .then(response =>{
        const data = response.data as MoviePage;
        // console.log(data);
        setPageNumber(data.number);
      });
  }, [])


  return(
    <>
      <p>{pageNumber}</p>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
