import './App.css';
//Imports
import { useEffect, useState } from 'react';
import axios from 'axios';

//Components
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  //UseState
  const [movieData, setMovieData] = useState(null);

  async function search(searchTerm) {
    try {
      //Make an apiCall and save response in variable
      let res = await axios.get(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_apiKey
        }&t=${searchTerm}`
      );

      //Save response data in state
      setMovieData(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <Form movieSearch={search} />
      <MovieDisplay movie={movieData} />
    </>
  );
}

export default App;