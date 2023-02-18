import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, summary, genres, test="default1"}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        {test}
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <div>{summary}</div>
      <ul>{genres ? genres.map((g) => <li key={g}>{g}</li>) : null}</ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Movie.defaultProps = {
  test : "default2"
}

export default Movie;
