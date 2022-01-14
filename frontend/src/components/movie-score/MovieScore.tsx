import React from 'react';

import MovieStars from 'components/movie-stars/MovieStars';

import './MovieScore.css';

function MovieScore() {
  const count = 4.5;
  const score = 19;

  return(
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
      <MovieStars />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
};

export default MovieScore;
