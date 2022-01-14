import React from 'react';

import Pagination from 'components/pagination/Pagination';
import MovieStars from 'components/MovieStars/MovieStars';

import './Listing.css';

function Listing(){
  return(
    <>
      <Pagination />
      <MovieStars />
    </>
  );
};

export default Listing;
