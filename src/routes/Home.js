import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import TopMenu from '../components/TopMenu';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year',
    );

    if (response.status === 200) {
      const json = await response.json();

      setMovies(json.data.movies);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <TopMenu />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            // test={null}
          />
        ))
      )}
    </div>
  );
}

export default Home;
