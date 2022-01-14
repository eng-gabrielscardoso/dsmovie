import React from 'react';

import Pagination from 'components/pagination/Pagination';
import MovieScore from 'components/movie-score/MovieScore';

import './Listing.css';

function Listing(){
  return(
    <>
      <Pagination />
      <MovieScore />
    </>
  );
};

export default Listing;
