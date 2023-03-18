const callToApi = () => {
  // Llamamos a la API
  return fetch(`https://imdb-api.com/en/API/MostPopularTVs/k_r4rugo33`)
    .then((response) => response.json())
    .then(data => {
      const movies = data.items
      const cleanMovies = movies.map((eachmovie) => ({
        title: eachmovie.fullTitle,
        actors: eachmovie.crew,
        id: eachmovie.id,
        image: eachmovie.image,
        rating: eachmovie.imDbRating,
        year: eachmovie.year,
      }))
      return cleanMovies;
    })
}
export default callToApi;