const ApiKey = "xxxxxxx";
// const ApiKey = import.meta.VITE_REACT_APP_API_KEY;
const requests = {
 
  fetchNetflixOriginals: `/discover/tv?api_key=${ApiKey}&with_networks=213`,
   fetchTrending: `/trending/all/week?api_key=${ApiKey}&language=en-us`,
   fetchTopRatedMovies: `/movie/top_rated?api_key=${ApiKey}&language=en-us`,
  fetchActionMovies: `/discover/tv?api_key=${ApiKey}&with_networks=28`,
  fetchComedyMovies: `/discover/tv?api_key=${ApiKey}&with_networks=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${ApiKey}&with_networks=28`,
  fetchRomanticMovies: `/discover/tv?api_key=${ApiKey}&with_networks=107`,
  fetchTvShow: `/discover/tv?api_key=${ApiKey}&with_networks=1`,
  fetchDocumentaries: `/discover/tv?api_key=${ApiKey}&with_networks=99`,
};

export default requests;
