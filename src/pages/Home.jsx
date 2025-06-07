import MovieRow from '../components/MovieRow';
import { fetchActionMovies, fetchComedyMovies, fetchPopularMovies, fetchRecentMovies, fetchScaryMovies } from '../database/api';
import React, { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const [recentMovies, setRecentMovies] = useState([])
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [scaryMovies, setScaryMovies] = useState([]);
  
  const [movie, setMovie] = useState();
  
    useEffect(() => {
      const fetchMovie = async () => {
        const res = await fetch(`${BASE_URL}/movie/27205?api_key=${API_KEY}&language=es`);
        const data = await res.json();
        setMovie(data);
      };
  
      fetchMovie();
    }, []);

    console.log(movie);

  useEffect(() => {
      const loadMovies = async () => {
      const movies = await fetchPopularMovies();
      setPopularMovies(movies);

      const recent = await fetchRecentMovies();
      setRecentMovies(recent);

      const action = await fetchActionMovies();
      setActionMovies(action);

      const comedy = await fetchComedyMovies();
      setComedyMovies(comedy);

      const scary = await fetchScaryMovies();
      setScaryMovies(scary);
    };
    loadMovies()
  }, []);

  if (!movie) {
    return (
      <div className="bg-black flex items-center justify-center py-20">
        <div className="text-white text-xl animate-pulse">Cargando...</div>
      </div>
    );
  }

  return (
    <>
      <section className='h-[400px] bg-banner-image bg-cover bg-center text-white flex flex-col justify-end px-6 py-10
      ' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
        <h1 className='text-4xl font-bold'>{`Pelicula destacada:  ${movie.title}`}</h1>
        <div className='flex gap-4 mt-4'>
          <button className='bg-white text-black px-4 py-2 rounded'>Reproducir</button>
          <button className='bg-gray-700 px-4 py-2 rounded'>Añadir a mi lista</button>
        </div>
      </section>
      <section className='mt-8'>
        <MovieRow movies={popularMovies} title="Populares"/>
        <MovieRow movies={recentMovies} title="Recientes"/>
        <MovieRow movies={actionMovies} title="Acción"/>
        <MovieRow movies={comedyMovies} title="Comedia"/>
        <MovieRow movies={scaryMovies} title="Terror"/>
      </section>
    </>
    
  );
};

export default Home;