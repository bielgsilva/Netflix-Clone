import './Main.css';
import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import Tmdb from '../../Tmdb';
import Movies from '../../components/movies/movies';
import MovieFeatured from '../../components/movieFeatured/movieFeatured';
import NetflixUserComponent from '../../components/NetflixUserComponent/NetflixUserComponent';
import Context from "../../context/Context";
import { useContext } from 'react';

function App() {
    const { showNetflixUserComponent, movieList, setMovieList } = useContext(Context)

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb();
            setMovieList(list);
        };
        loadAll();
    }, [setMovieList]);

    return (
        <main>
            {showNetflixUserComponent
                ? (<NetflixUserComponent />)
                : (<>
                    <Header />
                    <MovieFeatured />
                    {movieList.map((item, key) => (
                        <div key={key}>
                            <Movies title={item.title} items={item.items} />
                        </div>
                    ))}

                </>)}
        </main>
    );
}

export default App;