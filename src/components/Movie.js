import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ year, title, poster, summary, genres }) {
  const [state, setState] = useState("더보기");

  function eventOnClickMore(e) {
    console.log("클릭!");

    if (state === "더보기") {
      setState("접기");
    } else {
      setState("더보기");
    }
  }

  return (
    <div className="movie">
      {/* 링크 */}
      <Link
        to={{
          pathname: "/movie-detail",
          state: { year, title, summary, poster, genres },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <p className="movie__year">
            {genres.map((genre, idx) => {
              return (
                <li key={idx} className="movie__genres">
                  {genre}
                </li>
              );
            })}
          </p>
          <span className="movie__year">{year}</span>
          <p className="movie__summary">
            {/* 내용 전체 혹은 일부 표시 */}
            {state === "더보기" ? summary.slice(0, 150) : summary}
            <span className="btn_more" onClick={eventOnClickMore}>
              {/* 내용이 길면 [더보기] 버튼 표시 */}
              {summary.length > 150 ? "...  [" + state + "]" : null}
            </span>
          </p>
        </div>
      </Link>
      {/* 링크 끝 */}
    </div>
  );
}

Movie.propTypes = { year: PropTypes.number.isRequired, title: PropTypes.string.isRequired, poster: PropTypes.string.isRequired, genres: PropTypes.array.isRequired };

export default Movie;
