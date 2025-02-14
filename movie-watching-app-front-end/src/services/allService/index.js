const api_category = "http://localhost:5000/api/category";
const api_tvseries = "http://localhost:5000/api/tvseries";
const api_movies = "http://localhost:5000/api/movie";

const fetchApi = (api) => {
  return fetch(api)
    .then((reponse) => reponse.json())
    .catch((error) => {
      console.error("API fetch error:", error);
      throw error;
    });
};
const fetchMultipleApis = () => {
  return Promise.all([
    fetchApi(api_category),
    fetchApi(api_tvseries),
    fetchApi(api_movies),
  ])
    .then((results) => {
      return results;
    })
    .catch((error) => {
      console.error("Error in fetching multiple APIs:", error);
      throw error;
    });
};
const fetchApiCategory = () => {
  return fetch(api_category)
    .then((reponse) => reponse.json())
    .catch((error) => {
      console.error("API fetch error:", error);
      throw error;
    });
};
const fetchApiTvSeries = () => {
  return fetch(api_tvseries)
    .then((reponse) => reponse.json())
    .catch((error) => {
      console.error("API fetch error:", error);
      throw error;
    });
};
const fetchApiMovies = () => {
  return fetch(api_movies)
    .then((reponse) => reponse.json())
    .catch((error) => {
      console.error("API fetch error:", error);
      throw error;
    });
};
export {
  fetchMultipleApis,
  fetchApiCategory,
  fetchApiTvSeries,
  fetchApiMovies,
};
