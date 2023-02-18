import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const goBack = () => navigate(-1);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <div>
            <button type="button" onClick={goBack}>
              뒤로가기
            </button>
          </div>
          <img src={movie.large_cover_image} alt="상세이미지" />
          <p>
            <a href={movie.url} target="_blank" rel="noreferrer">
              {movie.title_long}
            </a>
          </p>
          <p>{movie.rating}</p>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
