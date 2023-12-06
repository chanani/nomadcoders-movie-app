import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DetailPage from "../components/DetailPage";
import LoadingPage from "../components/Loading";
import style from "../css/Detail.module.css";
import titleImg from "../image/title_img.png"

function Detail(){
  const [data, setData] = useState([]);
  const [render, setRender] = useState(true);
  const {id} = useParams();
  const [mode, setMode] = useState(localStorage.getItem("mode") === "true");

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setData(json.data.movie);
      setRender(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const modeClick = () => {
    localStorage.setItem("mode", !mode);
    setMode((prov) => !prov);
  };

  console.log(data);
  return (
    <div className={`${style.container} ${mode ? style.on_container : ""}`}>
      <div className={style.title_box}>
      <img src={titleImg} alt="title" className={style.title_img}/>
        <h1 className={style.title}>React Movie List</h1>
        {mode ? (
          <p className={style.mode} onClick={modeClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-brightness-high"
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
            </svg>
          </p>
        ) : (
          <p className={style.mode} onClick={modeClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-moon"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278M4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
            </svg>
          </p>
        )}
      </div>
      
      {render ?  <LoadingPage />: 
        (<DetailPage 
        id={data.id}
        bgImg={data.background_image_original}
        title={data.title}
        year={data.year}
        genres={data.genres}
        date={data.date_uploaded}
        likeCount={data.like_count}
        rating={data.rating}
        img={data.medium_cover_image}
        runtime={data.runtime}
        description_intro={data.description_intro}
        mode={mode}
        />
      )}
    </div>
  );
};

export default Detail;