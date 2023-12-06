import LoadingPage from "../components/Loading";
import style from "../css/DetailPage.module.css";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
function DetailPage({
  id,
  bgImg,
  title,
  year,
  genres,
  date,
  likeCount,
  rating,
  img,
  runtime,
  description_intro,
  mode
}) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backBtn = () => {
    navigate(-1);
  }

  return (
    <div className={style.header}>
      <div className={style.background_color}>
        {windowWidth > 768 ? (
          <div
            className={style.background_img}
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className={style.movie_info_box}>
              <div className={style.movie_info}>
                <div className={style.title}>
                  <h1>{title}</h1>
                </div>
                <div className={style.movie_year_box}>
                  <p>{year}</p>
                </div>
                <div className={style.movie_genres_box}>
                  {genres.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
                <div className={style.like_and_rating}>
                  <div className={style.like_count_box}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                    <h2>{likeCount}</h2>
                  </div>
                  <div className={style.rating_box}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <h2>{rating}</h2>
                  </div>
                </div>
              </div>

              <div className={style.movie_img_box}>
                <img src={img} alt="image" className={style.movie_img} />
              </div>
            </div>
          </div>
        ) : (
          <div
            className={style.background_img}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className={style.movie_info_box}>
              <div className={style.movie_info}>
                <div className={style.title}>
                  <h1>{title}</h1>
                </div>
                <div className={style.movie_year_box}>
                  <p>{year}</p>
                </div>
                <div className={style.movie_genres_box}>
                  {genres.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
                <div className={style.like_and_rating}>
                  <div className={style.like_count_box}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                    <h2>{likeCount}</h2>
                  </div>
                  <div className={style.rating_box}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <h2>{rating}</h2>
                  </div>
                </div>
              </div>
              <div className={style.movie_img_box}></div>
            </div>
          </div>
        )}
      </div>

      <div className={style.information_box}>
        <div className={style.summary_box}>
          <div className={`${style.summary_title_box} ${mode ? style.on_summary_title_box : ""}`}>
            <p>Description Summary</p>
          </div>
          <div className={`${style.summary_content_box} ${mode ? style.on_summary_content_box : ""}`}>
            <p>{description_intro}</p>
          </div>
        </div>

        <div className={style.date_and_run}>
          <div className={style.date_box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-calendar-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>

            <p className={style.date}>
              {date != null ? date.slice(0, 10) : "x"} |
            </p>
          </div>
          <div className={style.runtime_box}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-stopwatch"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
              <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
            </svg>
            <p className={style.movies_runtime}>{runtime} min</p>
          </div>

          <div className={style.backPage}>
            <button className={style.back_btn} onClick={backBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
