import Sidebar_v2 from "../../components/components/Sidebar_v2";
import { useEffect, useRef, useState } from "react";
function Series() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/api/tvseries")
      .then((reponsive) => reponsive.json())
      .then((data) => {
        // console.log(data.tvseries);
        setData(data.tvseries);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  const [curEpisode, setCurrentEpsiode] = useState();
  useEffect(() => {
    // if (data) {
    //   data.slice(0, 1).map((tvserie) => {
    //     console.log(tvserie.movie.tmdb);
    //     console.log(tvserie.episodes[0].server_data);
    //     tvserie.episodes[0].server_data.filter(
    //       (ep) => ep.name === tvserie.movie.tmdb.name && console.log(ep.name)
    //     );
    //   });
    // }
  }, [data]);
  return (
    <div style={{ marginBottom: "-50px" }}>
      {data &&
        data.slice(0, 4).map((tvserie) => {
          let result;
          if (tvserie.movie.episode_current.includes("Hoàn Tất")) {
            result =
              tvserie.episodes[0].server_data[
                tvserie.episodes[0].server_data.length - 1
              ].slug;
          } else {
            const filteredResult = tvserie.episodes[0].server_data.find(
              (ep) => ep.name === tvserie.movie.episode_current
            );

            result = filteredResult.slug;
          }

          return (
            <Sidebar_v2
              img={tvserie.movie.thumb_url}
              type={tvserie.movie.tmdb.type || "tv"}
              slug={tvserie.movie.slug}
              currentEpsiode={result}
            />
          );
        })}
    </div>
  );
}

export default Series;
