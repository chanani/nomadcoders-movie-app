import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import LoadingPage from "../components/Loading";
import style from "../css/Home.module.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";
// API : https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [rank, setRank] = useState(false);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    setSearch("");
    setFilteredMovies([]);
    setSelectedGenre("");
  };
  useEffect(() => {
    getMovies();
  }, []);
  const reset = () => {
    if(!rank){
      getMovies();
    }
  };
  const onSearchChange = (event) => {
    const searchSpace = event.target.value.replaceAll(" ", "").toLowerCase();
    setSearch(searchSpace); // movies 배열에서 검색어와 일치하는 영화만 필터링
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().replaceAll(" ", "").includes(searchSpace)
    );
    setFilteredMovies(filtered);
  };

  
  const onGenreButtonClick = (event) => {
    const genre = event.target.value;
    if(!rank){ // rank(x), genre(o)
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=like_count&genre=${genre}`
    )
      .then((response) => response.json())
      .then((json) => setMovies(json.data.movies));
    } else { // rank(o), genre(o)
      fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=download_count&genre=${genre}`
      )
        .then((response) => response.json())
        .then((json) => setMovies(json.data.movies));
        setFilteredMovies([]);
    }
    // 선택된 장르를 상태로 설정하여 스타일 적용
    setSelectedGenre(genre);
  };

  const rankCheckbox = (event) => {
    const checkedBoolean = event.target.checked;
    if(checkedBoolean){
      fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=download_count`)
      .then((response) => response.json())
      .then((json) => setMovies(json.data.movies));
    } else {
      getMovies();
    }
    setRank(checkedBoolean);
  };

  console.log(movies);

  return (
    <div className={style.container}>
      <div className={style.title_box}>
        <h1 className={style.title}>React Movie List</h1>
      </div>

      <div className={style.wrap}>
        <div className={style.search_box}>
          <div className={style.search_input_box}>
            <input
              value={search}
              type="search"
              className={style.search_input}
              placeholder="Search..."
              onChange={onSearchChange}
              disabled={rank}
            />
            <input
              type="reset"
              className={style.reset_btn}
              value="Reset"
              onClick={reset}
            />
          </div>
          <div className={style.search_select_box}>
            <button
              className={selectedGenre === "Action" ? style.selectedButton : ""}
              value="Action"
              onClick={onGenreButtonClick}
            >
              Action
            </button>
            <button
              value="Adventure"
              className={
                selectedGenre === "Adventure" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Adventure
            </button>
            <button
              value="Animation"
              className={
                selectedGenre === "Animation" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Animation
            </button>
            <button
              value="Biography"
              className={
                selectedGenre === "Biography" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Biography
            </button>
            <button
              value="Comedy"
              className={selectedGenre === "Comedy" ? style.selectedButton : ""}
              onClick={onGenreButtonClick}
            >
              Comedy
            </button>
            <button
              value="Crime"
              className={selectedGenre === "Crime" ? style.selectedButton : ""}
              onClick={onGenreButtonClick}
            >
              Crime
            </button>
            <button
              value="Documentary"
              className={
                selectedGenre === "Documentary" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Documentary
            </button>
            <button
              value="Drama"
              className={selectedGenre === "Drama" ? style.selectedButton : ""}
              onClick={onGenreButtonClick}
            >
              Drama
            </button>
            <button
              value="Family"
              className={selectedGenre === "Family" ? style.selectedButton : ""}
              onClick={onGenreButtonClick}
            >
              Family
            </button>
            <button
              value="Fantasy"
              className={
                selectedGenre === "Fantasy" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Fantasy
            </button>
            <button
              value="history"
              className={
                selectedGenre === "history" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              history
            </button>
            <button
              value="Horror"
              className={selectedGenre === "Horror" ? style.selectedButton : ""}
              onClick={onGenreButtonClick}
            >
              Horror
            </button>
            <button
              value="Music"
              className={selectedGenre === "Music" ? style.selectedButton : ""}
              onClick={onGenreButtonClick}
            >
              Music
            </button>
            <button
              value="Musical"
              className={
                selectedGenre === "Musical" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Musical
            </button>
            <button
              value="Mystery"
              className={
                selectedGenre === "Mystery" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Mystery
            </button>
            <button
              value="Reality-TV"
              className={
                selectedGenre === "Reality-TV" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Reality-TV
            </button>
            <button
              value="Romance"
              className={
                selectedGenre === "Romance" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Romance
            </button>
            <button
              value="Sci-Fi"
              className={selectedGenre === "Sci-Fi" ? style.selectedButton : ""}
              onClick={onGenreButtonClick}
            >
              Sci-Fi
            </button>
            <button
              value="Sport"
              className={selectedGenre === "Sport" ? style.selectedButton : ""}
              onClick={onGenreButtonClick}
            >
              Sport
            </button>
            <button
              value="Talk-Show"
              className={
                selectedGenre === "Talk-Show" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Talk-Show
            </button>
            <button
              value="Thriller"
              className={
                selectedGenre === "Thriller" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Thriller
            </button>
            <button
              value="War"
              className={selectedGenre === "War" ? style.selectedButton : ""}
              onClick={onGenreButtonClick}
            >
              War
            </button>
            <button
              value="Western"
              className={
                selectedGenre === "Western" ? style.selectedButton : ""
              }
              onClick={onGenreButtonClick}
            >
              Western
            </button>
          </div>
        </div>

        <div className={style.middle_box}>
          <div className={style.rank_box}>
            <input
              type="checkbox"
              id="custom-switch"
              className={style.check_input}
              onChange={rankCheckbox}
            />
            <label htmlFor="custom-switch">Rank</label>
          </div>

          <div className={style.xx_box}></div>
        </div>

        <div className={style.movies_list}>
          {loading ? (
            <LoadingPage />
          ) : (
            <div className={style.movie_container}>
              {filteredMovies.length > 0
                ? // 필터링된 영화 목록 렌더링
                  filteredMovies.map((movie, index) => (
                    <Movie
                      rank={rank}
                      index={index}
                      key={movie.id}
                      id={movie.id}
                      coverImg={movie.medium_cover_image}
                      title={movie.title}
                      date={movie.date_uploaded}
                      runtime={movie.runtime}
                      rating={movie.rating}
                      year={movie.year}
                    />
                  ))
                : // 필터링된 결과가 없을 경우 전체 영화 목록 렌더링
                  movies.map((movie, index) => (
                    <Movie
                      rank={rank}
                      index={index}
                      key={movie.id}
                      id={movie.id}
                      coverImg={movie.medium_cover_image}
                      title={movie.title}
                      date={movie.date_uploaded}
                      runtime={movie.runtime}
                      rating={movie.rating}
                      year={movie.year}
                    />
                  ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
