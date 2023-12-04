import loadingImg from "../image/loading.gif";
import style from "../css/Home.module.css"
function Loading(){
  return(
    <div className={style.Loading_box}>
      <img src={loadingImg} alt="" className="loading-img"/>
    </div>
  );
}

export default Loading;