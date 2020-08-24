import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import { number } from 'prop-types';

// class component
class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {data: { data: { movies }}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }

  componentDidMount(){
    this.getMovies();
    // fetch() or Axios
  }

  render(){
    const {isLoading, movies} = this.state;
    return <div>{isLoading ? "Loading ... " 
    : movies.map(movie => {
      return(
        <Movie 
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.mdeium_cover_image} 
          key={movie.id}
        />
      )
    })}</div>
  }
z
}

export default App;
