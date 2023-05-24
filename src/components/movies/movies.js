import React, { useState } from "react";
import "./movies.css";
import Modal from '../modal/modal'
import Context from "../../context/Context";
import { useContext } from 'react';

function Movies({ title, items }) {
    const { selectedMovie, setSelectedMovie, showModal, setShowModal, genreMap } = useContext(Context)
    const [scrollX, setScrollX] = useState(0);
    let timeoutId;

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleMouseEnter = (item) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setSelectedMovie(item);
        }, 200);
    };

    const moveLeft = () => {
        let currentMargin = scrollX
        if (currentMargin === 0) {
            return
        }
        setScrollX(currentMargin - 400);
    };

    const moveRight = () => {
        let currentMargin = scrollX
        if (currentMargin >= 3500) {
            return
        }
        setScrollX(currentMargin + 400);
    };

    return (
        <div className="movies">
            <h2>{title}</h2>
            <div className="movieArea">
                <div className="move-left" onClick={moveLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" width="50" height="50">
                        <path d="M22,29.73a1,1,0,0,1-.71-.29L9.93,18.12a3,3,0,0,1,0-4.24L21.24,2.56A1,1,0,1,1,22.66,4L11.34,15.29a1,1,0,0,0,0,1.42L22.66,28a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29.73Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="move-right" onClick={moveRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" width="50" height="50">
                        <path d="M10.05,29.73a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L20.66,16.71a1,1,0,0,0,0-1.42L9.34,4a1,1,0,0,1,1.42-1.42L22.07,13.88a3,3,0,0,1,0,4.24L10.76,29.44A1,1,0,0,1,10.05,29.73Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="movieList" style={{ marginLeft: `-${scrollX}px` }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div
                            key={key}
                            className="movie"
                            onMouseEnter={() => handleMouseEnter(item)}
                        >
                            {selectedMovie === item && (
                                <div
                                    className="miniModal"
                                    style={{
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.poster_path})`,
                                        position: 'relative'
                                    }}
                                >
                                    {showModal && selectedMovie === item && (
                                        <Modal
                                            name={selectedMovie.original_title}
                                            overview={selectedMovie.overview}
                                            setShowModal={setShowModal}
                                            showModal={showModal}
                                            backdrop={selectedMovie.backdrop_path}
                                        />
                                    )}

                                    <h2>{item.title}</h2>
                                    <span>Gêneros: {item.genre_ids.map(id => genreMap[id]).join(', ')}</span>
                                    <p>Nota IMDB: {item.vote_average}</p>

                                    <div className='btn-play-m'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" width="28" height="24">
                                            <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                                        </svg>
                                        <span>Assistir</span>
                                    </div>
                                    <div className='btn-info-m' onClick={handleShowModal}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
                                        </svg>
                                        <span>Mais informações</span>
                                    </div>
                                </div>
                            )}

                            {selectedMovie !== item && (
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Movies;
