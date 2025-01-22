import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie(props) {
    console.log(props);
    return (
        <div className="movie">
            <img src={props.poster} alt={props.title} title={props.title} />

            <div className="movie__data">
                <h3 className="movie__title">{props.title}</h3>
                <h5 className="movie__year">{props.year}</h5>
                <ul className="genres">
                    {props.genres.map((genre, index) =>
                        <li key={index} className="genres__genre">{genre}</li>
                    )}
                </ul>
                <p className="movie__summary">
                    {/* {props.summary.length > 255 ? props.summary + "..." : props.summary} */}
                    {props.summary.slice(0, 140) + "..."}
                </p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;