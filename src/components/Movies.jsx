

export function ResponseMovies ({movies}) {
    return (
      movies.map((movie) => (
        <article key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </article>
      ))
    )
  }

export function NoResponse () {
    return (
      <p>No se encontró la película</p>
    )
  }