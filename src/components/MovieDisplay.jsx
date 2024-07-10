const MovieDisplay = ({ movie }) => {

  const loading = () => {
    return <h1>No Movie To Display</h1>
  }

  const loaded = () => {
    return (
      <>
      <h1>{movie.Title}</h1>
      <h2>{movie.Genre}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Year}</h2>
      <h3>{movie.Actors}</h3>
      <h4>{movie.Plot}</h4>
      </>
    )
  }
    return movie ? loaded():loading();
  }
  
  export default MovieDisplay