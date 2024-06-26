import { useState, useEffect } from "react";
import { URL_API, API_KEY } from "../utils/constants";
import MovieCard from "../components/MovieCard/MovieCard.jsx";
import PaginationMovie from "../components/PaginationMovie/PaginationMovie.jsx";

const Popular = () => {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/popular?api_key=${API_KEY}&languaje=en-US&page=${page}`
      );
      const movies = await response.json();
      setLoadingState(false);
      setUrl(movies);
    })();
  }, [page]);

  const onChangePage = (page) => setPage(page);

  return (
    <div>
      <div style={{ minHeight: "74.5vh" }}>
        <h1>Popular Movies</h1>
        <MovieCard url={url} loadingState={loadingState} />
        <PaginationMovie
          currentPage={url.page}
          totalItems={url.total_results}
          onChangePage={onChangePage}
        />
      </div>
    </div>
  );
};

export default Popular;
