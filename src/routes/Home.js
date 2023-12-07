import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import LoadingPage from "../components/Loading";
import style from "../css/Home.module.css";

import titleImg from "../image/title_img.png";

// API : https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [rank, setRank] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("mode") === "true");
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
    if (!rank) {
      getMovies();
    }
  };
  
  const onSearchChange = (event) => {
    const searchSpace = event.target.value.toLowerCase();
    setSearch(searchSpace); // movies 배열에서 검색어와 일치하는 영화만 필터링
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().replaceAll(" ", "").includes(searchSpace.replaceAll(" ", ""))
    );
    setFilteredMovies(filtered);
  };

  const onGenreButtonClick = (event) => {
    const genre = event.target.value;
    if (!rank) {
      // rank(x), genre(o)
      fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=like_count&genre=${genre}`
      )
        .then((response) => response.json())
        .then((json) => setMovies(json.data.movies));
    } else {
      // rank(o), genre(o)
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
    if (checkedBoolean) {
      fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=download_count`
      )
        .then((response) => response.json())
        .then((json) => setMovies(json.data.movies));
    } else {
      getMovies();
    }
    setRank(checkedBoolean);
  };

  const modeClick = () => {
    localStorage.setItem("mode", !mode);
    setMode((prov) => !prov);
  };

  return (
    <div className={`${style.container} ${mode ? style.on_container : ""}`}>
      <div className={style.title_box}>
        <img src={titleImg} alt="title" className={style.title_img} />
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
          <div className={`${style.search_select_box} ${mode ? style.on_select_box : ""}`}>
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
                      mode={mode}
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
                      mode={mode}
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
