import MovieRow from '../components/MovieRow';
import { fetchActionMovies, fetchComedyMovies, fetchPopularMovies, fetchRecentMovies, fetchScaryMovies } from '../database/api';
import React, { useEffect, useState } from 'react';

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const [recentMovies, setRecentMovies] = useState([])
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [scaryMovies, setScaryMovies] = useState([]);

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

  return (
    <>
      <section className='h-[400px] bg-banner-image bg-cover bg-center text-white flex flex-col justify-end px-6 py-10'>
        <h1 className='text-4xl font-bold'>Pelicula destacada</h1>
        <p className='max-w-md mt-2 mx-4'>Descripcion</p>
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