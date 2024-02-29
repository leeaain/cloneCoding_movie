// 영화 앱 화면
import React from "react";
import axios from "axios";

import Movie from "../components/Movie";
import "./Home.css";

// 클래스형 컴포넌트
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // const data = movies.data.data.movies;
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");

    // setState가 동작하면 -> render()가 실행됨.
    this.setState({ movies, isLoading: false }, () => {
      console.log(this.state.movies);
    });
  };

  // render가 실행되면 호출됨
  componentDidMount() {
    this.getMovies();
  }

  // setState가 동작하면 -> render()가 실행됨.
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">"Loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return <Movie key={movie.id} title={movie.title} year={movie.year} poster={movie.large_cover_image} summary={movie.summary} genres={movie.genres} />;
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
