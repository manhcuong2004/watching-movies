import Movies from "../Movies";
import MoviePage from "../MoviePage";
import Category from "../Category";
import { useParams } from "react-router-dom";
function DynamicPage() {
  const { param1, param2, param3 } = useParams();
  console.log(param1, param2, param3);
  if (param1 === "movies" || param1 === "series") {
    if (param2) {
      return (
        <Movies
          category={param1}
          categoryName={param2}
          pageNumber={param3 || null}
        />
      );
    } else {
      return <Category category={param1} />;
    }
  } else if (param1 === "movie" || param1 === "tv") {
    return (
      <MoviePage type={param1} slug={param2} currentEpisode={param3 || null} />
    );
  } else {
    return <div>Error: Unknown</div>;
  }
}
export default DynamicPage;
