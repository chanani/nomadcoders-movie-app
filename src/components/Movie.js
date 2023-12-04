import { Link } from "react-router-dom";
import style from "../css/Movie.module.css";

function Movie({rank, index, id, coverImg, title, date, runtime, rating, year }) {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <div className={style.img_box}>
          <Link to={`/movie/${id}`} className="movie_link">
            <img src={coverImg} alt={title} className={style.movies_img} />
            <p className={style.movie_title}>
              {title.length > 17 ? `${title.slice(0, 17)}...` : title}
            </p>
            <span className={style.movie_year}>{year}</span>
            {rank ? 
            <span className={style.movie_rank}>{index+1}</span>
            : null}
          </Link>
        </div>

        <div className={style.info_box}>
          <div className={style.date_box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-stopwatch"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
              <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
            </svg>
            <p className={style.date}>{date != null ? date.slice(0, 10) : "x"}</p>
          </div>
          <div className={style.runtime_box}>
            <p className={style.movies_runtime}>{runtime} min</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-calendar-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
