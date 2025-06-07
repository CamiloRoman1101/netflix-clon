import React, { useEffect } from 'react';
import MovieRow from '../components/MovieRow';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es`);
      const data = await res.json();
      setMovie(data);
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return (
      <div className="bg-black flex items-center justify-center py-20">
        <div className="text-white text-xl animate-pulse">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      <section 
        className="relative h-[70vh] md:h-[90vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="relative h-full flex flex-col justify-end px-4 md:px-12 pb-6 md:pb-12">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              {movie.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm md:text-base">
              <span className="bg-red-600 px-3 py-1 rounded text-white font-semibold">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>
              <span className="text-gray-300">
                {movie.release_date ? movie.release_date.slice(0, 4) : 'Año no disponible'}
              </span>
              <span className="text-gray-300">
                {movie.runtime ? `${movie.runtime} min` : 'Duración no disponible'}
              </span>
              <span className="text-gray-300">
                {movie.adult ? '18+' : 'ATP'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres?.map((genre) => (
                <span 
                  key={genre.id} 
                  className="bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full text-sm text-gray-200"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              {movie.overview || 'Descripción no disponible'}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
                Reproducir
              </button>
              <button className="bg-gray-600 bg-opacity-70 text-white px-6 py-3 rounded font-semibold hover:bg-gray-500 hover:bg-opacity-70 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Mi Lista
              </button>
              <button className="bg-gray-600 bg-opacity-70 text-white px-4 py-3 rounded hover:bg-gray-500 hover:bg-opacity-70 transition-colors duration-200 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

  
      <section className="px-4 md:px-12 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Acerca de {movie.title}</h2>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex flex-wrap">
                <span className="text-gray-400 w-24 flex-shrink-0">Director:</span>
                <span>Por determinar</span>
              </div>
              
              <div className="flex flex-wrap">
                <span className="text-gray-400 w-24 flex-shrink-0">Reparto:</span>
                <span>Cargando...</span>
              </div>
              
              <div className="flex flex-wrap">
                <span className="text-gray-400 w-24 flex-shrink-0">Géneros:</span>
                <span>{movie.genres?.map(g => g.name).join(', ') || 'No disponible'}</span>
              </div>
              
              <div className="flex flex-wrap">
                <span className="text-gray-400 w-24 flex-shrink-0">Idioma:</span>
                <span>{movie.original_language?.toUpperCase() || 'No disponible'}</span>
              </div>
            </div>
          </div>

          {/* Sidebar con poster */}
          <div className="md:col-span-1">
            {movie.poster_path && (
              <div className="sticky top-8">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full max-w-xs mx-auto rounded-lg shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recomendaciones */}
      <section className="px-4 md:px-12 pb-12">
        <MovieRow titulo="Películas similares" />
      </section>
    </div>
  );
};

export default MovieDetail;