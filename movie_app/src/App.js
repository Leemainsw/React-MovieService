import React from 'react';
import axios from 'axios';
import { number } from 'prop-types';

// class component
class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  getMovies = () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");

  }
  async componentDidMount(){
    this.getMovies();
    // fetch() or Axios
  }

  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading ... " : "We are ready"}</div>
  }

}

export default App;
