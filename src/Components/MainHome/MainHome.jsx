import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useRef } from 'react'
import { faSnowflake, faUser, faStar, faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faBomb, faCrown, faHeart as fullHeart, faFire } from '@fortawesome/free-solid-svg-icons';
import './MainHome.css'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const MainHome = () => {

    const [movies , setMovies] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('https://api.jikan.moe/v3/top/anime/1/airing');

                const data = await result.json();
                const loadedMovies = [];
                // console.log(data.top)
                for (const key in data.top) {
                    loadedMovies.push({
                        ...data.top[key],
                        id: key,
                        isFave: true
                    });
                }
                // localStorage.setItem('movies', JSON.stringify(loadedMovies));
                setMovies(loadedMovies);
            } catch (error) {
            }
        }

        fetchData();
    },[])

// console.log(movies);
    const updateMovies =(movie) => {
        const newMovies = [...movies];
        const index = newMovies.findIndex(m => m.id === movie.id);
        newMovies[index].isFav = !newMovies[index].isFav;
        setMovies(newMovies);
    }
    
    return (
        <>
            <NavBar>
                <DropDown />
            </NavBar>
            <Header movies={movies} updateMovies={updateMovies}/>
            <Footer/>
        </>
    )
}

const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar ">
            <div className="container">
                <div className="logo-div">
                    <h1> <FontAwesomeIcon icon={faSnowflake}  /> OTAKI</h1>
                </div>
                <div className="links-div">
                    <ul className="link-menu">
                        <li >
                            <a onClick={() => setIsOpen(!isOpen)} href="#"> User <FontAwesomeIcon icon={faUser}  /></a>
                            {isOpen && props.children}
                        </li>
                        
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}

const DropDown = () => {
    return (
        <div className="dropdown">
            <ul>
                <li>user</li>
                <li>
                    <Link to='/user'>
                    <FontAwesomeIcon icon={faStar}  />  Favorite
                    </Link> 
                </li>
                <li>
                    <button onClick={() => window.location.href="/"} className='btn btn-danger'>Sign-Out</button>
                </li>
            </ul>
        </div>
    )
}

const Header = (props ) =>{

    
    return (
        <header className='header-2'>
            <div className="container h-container">
                <div className="header-items">
                    <h2>welcome to my website <FontAwesomeIcon icon={faBomb} /></h2>
                    <p>here you will see amazing things, that will waste your time , injoy please</p>
                </div>
                <span className='line'></span>
                <div className="show-item1">
                    <h1><FontAwesomeIcon icon={faCrown} /> Best 50's Anime </h1>
                    <Slider movies={props.movies} updateMovies={props.updateMovies}/>
                </div>
            </div>
        </header>
    )
}

const Slider = (props) => {
    const [moveis, setMovies] = useState(props.movies)
    const [isOpen , setIsOpen] = useState(false);
    const carousel = useRef()


    return (
            <motion.div ref={carousel} className='carousel'>
                <motion.div drag="x" dragConstraints={{right:0 , left:-9320}} className='container p-2 inner-carousel'>
                    {props.movies.map((movie) => { 
                        return(
                            <motion.div  key={movie.id} className='movie-container'>
                                <motion.div className="item" onClick={()=> setIsOpen(true)}>
                                    <img src={movie.image_url} alt={movie.title}  />
                                    <motion.div className='layer'>
                                        {movie.title}
                                        <motion.div className='favorite-tick'  key={movie.mal_id}>
                                            {!movie.isFav ? <FontAwesomeIcon icon={emptyHeart} onClick={()=>props.updateMovies(movie)} /> : 
                                            <FontAwesomeIcon icon={fullHeart} className="change-heart" onClick={()=> props.updateMovies(movie)} />}
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                                {isOpen && (
                                    <Model>
                                        {movie.title}
                                    </Model>
                                )}
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
    )
}

const Footer = () => {
    return(
        <footer>
            <div className='container'>
                @ all reseved for OTAKi industry <FontAwesomeIcon icon={fullHeart}/>
            </div>
        </footer>
    )
}

const Model =(props)=> {
    return (
        <div style={{ width:"50px",color:"#fff" }}>
            {props.children}
        </div>
    )
}

export default MainHome
