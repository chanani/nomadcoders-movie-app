import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DetailPage from "../components/DetailPage";
import LoadingImg from "../image/loading.gif";
import style from "../css/Detail.module.css";
import titleImg from "../image/title_img.png"

function Detail(){
  const [data, setData] = useState([]);
  const [render, setRender] = useState(true);
  const {id} = useParams();
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

  console.log(data);
  return (
    <div className={style.container}>
      <div className={style.title_box}>
      <img src={titleImg} alt="title" className={style.title_img}/>
        <h1 className={style.title}>React Movie List</h1>
      </div>

      {render ? <img src={LoadingImg} className={style.Loading_box}></img> : 
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
        />
      )}
    </div>
  );
};

export default Detail;