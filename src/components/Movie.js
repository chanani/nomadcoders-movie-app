// import { propTypes } from "react-bootstrap/esm/Image";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}) {
  return(
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
// Movie.propTypes = {
//   coverImg : propTypes.string.isRequired,
//   title : propTypes.string.isRequired,
//   summary : propTypes.string.isRequired,
//   genres : propTypes.arrayOF.isRequired
// }
export default Movie;
