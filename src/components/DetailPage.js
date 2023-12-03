function DetailPage({id, img, title, genres, runtime}){
  return (
    <div>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>runtime : <strong>{runtime}</strong>minute</p>
      <ul>
        {genres.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default DetailPage;