import { useState, useRef } from "react";

export default function ValuesProvider() {
    const [movieList, setMovieList] = useState([]);
    const [blackHeader, setBlackHeader] = useState(false);
    const [showNetflixUserComponent, setShowNetflixUserComponent] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [searchInputVisible, setSearchInputVisible] = useState(false);
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [showResults, setShowResults] = useState(false)
    const [openModalUser, setOpenModalUser] = useState(false)
    const [peaky, setPeaky] = useState({})
    const header = useRef(null)


    const genreMap = {
        12: 'Aventura',
        16: 'Animação',
        35: 'Comédia',
        36: 'História',
        37: 'Faroeste',
        27: 'Terror',
        10402: 'Música',
        10749: 'Romance',
        14: 'Fantasia',
        878: 'Ficção Científica',
        10770: 'Cinema TV',
        10752: 'Guerra',
        9648: 'Mistério',
        99: 'Documentário',
        10751: 'Família'
    };
    return ({
        //main
        movieList,
        setMovieList,
        //header
        blackHeader,
        setBlackHeader,
        showNetflixUserComponent,
        setShowNetflixUserComponent,
        selectedMovie,
        setSelectedMovie,
        showModal,
        setShowModal,
        genreMap,
        header,
        //movies
        searchInputVisible,
        setSearchInputVisible,
        search,
        setSearch,
        movies,
        setMovies,
        showResults,
        setShowResults,
        openModalUser,
        setOpenModalUser,
        //movieFeatured
        peaky,
        setPeaky,




    });
}