import React from "react";
import "./App.css";

// prettier-ignore
const moviesArr = [{"hasOscars": false, "title":"The Shawshank Redemption","year":"1994","director":"Frank Darabont","duration":"2h 22min","genre":["Crime","Drama"],"rate":"9.3","id":0},{"hasOscars": true, "title":"The Godfather","year":"1972","director":"Francis Ford Coppola","duration":"2h 55min","genre":["Crime","Drama"],"rate":"9.2","id":1},{"hasOscars": true, "title":"The Godfather: Part II","year":"1974","director":"Francis Ford Coppola","duration":"3h 22min","genre":["Crime","Drama"],"rate":"9.0","id":2},{"hasOscars": true, "title":"The Dark Knight","year":"2008","director":"Christopher Nolan","duration":"2h 32min","genre":["Action","Crime","Drama","Thriller"],"rate":"9.0","id":3},{"hasOscars": false, "title":"12 Angry Men","year":"1957","director":"Sidney Lumet","duration":"1h 36min","genre":["Crime","Drama"],"rate":"8.9","id":4}]

const Movie = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.director}</p>
      {props.hasOscars ? (
        <p>
          This movie has an Oscar{" "}
          <span role="img" aria-label="star-emoji">
            ⭐️
          </span>
        </p>
      ) : (
        <p>No Oscar for this movie...</p>
      )}
      {props.rate > 9 && <p>{props.rate}</p>}
    </div>
  );
};

const MovieList = props => {
  return props.movies.map(movie => {
    return (
      <Movie
        key={movie.id}
        title={movie.title}
        director={movie.director}
        rate={movie.rate}
        hasOscars={movie.hasOscars}
      />
    );
  });
};

class App extends React.Component {
  // initial state
  state = {
    movies: moviesArr
  };

  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
