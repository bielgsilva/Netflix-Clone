import './App.css';
import React, { useEffect, useState } from 'react';
import Header from '../src/components/header/header';
import Tmdb from './Tmdb';
import Movies from './components/movies/movies';
import MovieFeatured from './components/movieFeatured/movieFeatured';
import NetflixUserComponent from './components/NetflixUserComponent/NetflixUserComponent';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);
  const [showNetflixUserComponent, setShowNetflixUserComponent] = useState(true);

  const handleSelectUser = () => {
    setShowNetflixUserComponent(false);
  };



  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb();
      setMovieList(list);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollPage = () => {
      if (window.scrollY > 20) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollPage);
  }, []);

  return (
    <div className="page">
      {showNetflixUserComponent ? (
        <NetflixUserComponent handleSelectUser={handleSelectUser} />
      ) : (
        <>
          <Header black={blackHeader} setShowNetflixUserComponent={setShowNetflixUserComponent}/>
          <MovieFeatured />
          <section className='lists'>
            {movieList.map((item, key) => (
              <div key={key}>
                <Movies title={item.title} items={item.items} />
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

export default App;