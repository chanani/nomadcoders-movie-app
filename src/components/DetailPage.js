import LoadingPage from "../components/Loading";
import style from "../css/DetailPage.module.css";
import { useState, useEffect } from "react";
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
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
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
                      class="bi bi-star-fill"
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
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
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
                      class="bi bi-star-fill"
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

      <div className={style.middle}>
        <div></div>
        <div>
          <p>runtime : {runtime}minute</p>
          <p className={style.date}>{date != null ? date.slice(0, 10) : "x"}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
