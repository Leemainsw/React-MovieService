import React from 'react';
import PropTypes, { number } from 'prop-types';

function Movie({id, year, title, summary, poster, key}){
    return <h1>{title}</h1>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;