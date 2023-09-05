import { NoResponse, ResponseMovies } from './components/Movies';
import { useMovies } from './hooks/useMovies';

function App() {

  const { movies } = useMovies();

  const hasMovies = movies?.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new window.FormData(e.target);
    const movie = query.get('movie');
    console.log(movie)
  }

  return (
    <main>
      <h1>Películas</h1>
      <form onSubmit={handleSubmit}>
        <input name="movie" placeholder="Avengers, Titanic" />
        <button type='submit'>Buscar</button>
      </form>
      <section>
        {
          hasMovies
          ? <ResponseMovies movies={movies}/>
          : <NoResponse />
        }

      </section>
    </main>
  )
}

export default App
