import './movieFeatured.css'
import React, { useState, useEffect } from 'react'
import api from '../../API/axios'
import peakyImage from '../../assets/peaky-blinders.png'
import Modal from '../modal/modal'


const MoviesSearch = () => {
    const [peaky, setPeaky] = useState({})
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        const peakyBlinders = async () => {
            const responsePeaky = await api.get('https://api.themoviedb.org/3/search/tv', {
                params: {
                    api_key: 'd198a3e7459e43559300e2b8789de7d6',
                    query: 'Peaky Blinders',
                    language: "pt-br"
                }
            })
            const peaky = responsePeaky.data.results[0]
            setPeaky(peaky)
        }
        peakyBlinders()
    }, [])

    const handleInfoClick = () => {
        setShowModal(true);
    };


    return (
        <div className='container' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${peaky.backdrop_path})`,
        }}>

            {showModal && <Modal name={peaky.name} overview={peaky.overview} setShowModal={setShowModal} showModal={showModal} backdrop={peaky.backdrop_path} />}



            <div className='container-degrade-vertical'>
                <div className='container-degrade-horizontal'>
                    <div className='info'>
                        <div className='nameImage'><img src={peakyImage} alt='peakyImage'></img></div>

                        <div className='overview'>{peaky.overview}</div>

                        <div className='box-btn'>
                            <div className='btn-play'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" width="28" height="24">
                                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                                </svg>
                                <span>Assistir</span>
                            </div>
                            <div className='btn-info' onClick={handleInfoClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
                                </svg>
                                <span>Mais informações</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );

}
export default MoviesSearch
