const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es`);
    if (!response.ok) {
      throw new Error('Error al obtener las películas');
    }

    const data = await response.json();
    return data.results; // Es un array de películas
  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
    return [];
  }
};

export const fetchRecentMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=es`);
       const data = await response.json();
    return data.results; 
    } catch (error) {
    console.error('Error al hacer la solicitud:', error);
    return [];
   }
}

export const fetchActionMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=es`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error al obtener películas de acción:', error);
    return [];
  }
};

export const fetchComedyMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35&language=es`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error al obtener películas de comedia:', error);
    return [];
  }
}

export const fetchScaryMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=es`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error al obtener películas de terror:', error);
    return [];
  }
}

