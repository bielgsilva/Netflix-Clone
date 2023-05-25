import React from 'react';
import './moviesSearch.css';

const MoviesSearch = ({ movies, setShowResults }) => {
    document.body.style.overflow = 'hidden';

    const handleCloseModal = () => {
        document.body.style.overflow = 'auto';
        setShowResults(false);
    };

    return (
        <div className='container-search'>
            <div onClick={handleCloseModal} className='closeModal-search'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                    <path d="  M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z" ></path>
                </svg>
            </div>

            <div className="movies-list-search">
                {movies !== undefined && movies.map((movie, key) => (
                    <div key={key} className="movie-box">
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
                        <h3>{movie.original_title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesSearch;
