import { Link } from 'react-router-dom';


const MovieRow = ({title, movies}) => {

   

  return (
    <section className='mb-6 px-4'>
      
      <h2 className='text-white text-xl font-semibold mb-2'>{title}</h2>
        <div className='flex overflow-x-auto gap-4 hide-scrollbar'>
         {movies && movies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div key={movie.id} className='min-w-[150px]'>
            <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className='w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300' />
            <p className="text-white mt-2 text-sm">{movie.title}</p>
            </div>
            </Link>
         ))}
         
        </div>
        
        
    </section>
  );
};

export default MovieRow;