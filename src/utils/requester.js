export const getMovies = async ({
  pageNumber,
  onSuccess = data => {
    console.log(data);
  },
  onFailure = data => {
    console.log(data);
  },
}) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=${pageNumber}`,
    );
    const json = await response.json();
    if (response.status === 200) {
      onSuccess(json.results);
    } else {
      onFailure();
    }
  } catch (error) {
    onFailure();
  }
};
