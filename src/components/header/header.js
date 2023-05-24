import React, { useContext, useEffect, useRef } from "react";
import api from "../../API/axios";
import netflxLogo from '../../assets/netflix-logo.png';
import Context from "../../context/Context";
import MoviesSearch from "../moviesSearch/moviesSearch";
import ModalIconMenu from "./components/ModalIconMenu/Modal-icon-menu";
import './header.css';

const Header = () => {
    const header = useRef(null)

    const { setShowNetflixUserComponent, searchInputVisible, setSearchInputVisible, search, setSearch, movies, setMovies, showResults, setShowResults, openModalUser, setOpenModalUser, showModal } = useContext(Context)


    //Controla a cor do Header ao scrollar a pagina
    useEffect(() => {
        const scrollPage = () => {
            const headerElement = header.current;

            if (headerElement) {
                if (window.scrollY > 20) {
                    headerElement.classList.add('scroll');
                } else {
                    headerElement.classList.remove('scroll');
                }
            }
        };

        window.addEventListener('scroll', scrollPage);
    }, []);


    //Controla o Icone da Busca de Filmes
    const handleSearchIconClick = () => {
        setSearchInputVisible((prevState) => !prevState);
    };

    //Controla o que é digitado no input da pesquisa de filmes
    const handleSearchInputChange = (event) => {
        setSearch(event.target.value);
        searchMovies(event.target.value);
    };

    //Faz a pesquisa automatica de tudo que é digitado no input da pesquisa de filmes
    const handleSearchInputKeyPress = async (event) => {
        if (event.key !== "Enter" && search.trim() !== "") {
            header.current.className = 'scroll'
            setShowResults(true);
            await searchMovies(search);
        }
    };

    //Realiza a pesquisa de filmes na API
    const searchMovies = async (query) => {
        const API_KEY = 'd198a3e7459e43559300e2b8789de7d6';
        const response = await api.get('/search/movie', {
            params: {
                api_key: API_KEY,
                language: 'pt-br',
                query: query
            }
        });
        setMovies(response.data.results);
    };

    //Controla o Icone do Perfil
    const handleIconModal = (user) => {
        setOpenModalUser((prevState) => !prevState);
    };

    const handleUserChange = () => {
        const currentUser = localStorage.removeItem('currentUser');
        if (!currentUser) {
            setShowNetflixUserComponent(true)
        }
        setOpenModalUser(false)
    }

    return (
        <header className={`${showModal ? 'header-hidden' : ''}`} ref={header}>

            <div className="logo">
                <img src={netflxLogo} alt="netflix-logo" ></img>
            </div>

            <div className="links">
                <ul>
                    <li><a href="/">Inicio</a> </li>
                    <li><a href="/">Séries</a> </li>
                    <li><a href="/">Filmes</a></li>
                    <li><a href="/">Bombando</a></li>
                    <li><a href="/">Minha Lista</a></li>
                    <li><a href="/">Navegar por Idiomas</a></li>

                </ul>
            </div>

            <div className="icons">
                {searchInputVisible &&
                    <input
                        type="text"
                        value={search}
                        onChange={handleSearchInputChange}
                        onKeyDown={handleSearchInputKeyPress}
                        placeholder="Títulos, gente e gêneros"
                    />
                }

                <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="search-icon" data-name="Search" alt='search-icon' onClick={handleSearchIconClick}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z" fill="currentColor"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                    <path d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" fill="currentColor"></path>
                </svg>
                <img src="https://occ-0-1665-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYKetiOvJU_Tx2VRF_T5L-mZSBHXmTyFJEFdNVXxLbcuyhdG6co6YKYor3Z3dzhexDo3PmYSJI2fpYtzyhBkQctVJlVgVtI.png?r=4e1" alt="menu" className="icon-menu" onClick={handleIconModal} />

                {openModalUser && <ModalIconMenu handleIconModal={handleIconModal} handleUserChange={handleUserChange} />}
            </div>

            {showResults && <MoviesSearch movies={movies} setShowResults={setShowResults} />}
        </header>
    );
};

export default Header;
