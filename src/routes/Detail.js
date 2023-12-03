import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DetailPage from "../components/DetailPage";
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
    <div>
      {render ? (<h1>DetailPage loading....</h1>) : 
        (<DetailPage 
        id={data.id}
        img={data.medium_cover_image}
        title={data.title}
        genres={data.genres}
        runtime={data.runtime}
        />
      )}
    </div>
  );
};

export default Detail;