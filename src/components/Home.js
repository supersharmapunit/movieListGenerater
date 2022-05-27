import React,{useState} from "react";
import Navbar from "./Navbar";
import './Home.css'
import Card from './Card'
import { shouldContinue } from './Navbar'

const Home = () => {
  
  const [movieObj, setMovieObj] = useState({});
  if(movieObj.length !== 0) console.log(movieObj);
  return (
    <div className="home">
      <Navbar className="navbar" movieObj={movieObj} setMovieObj={setMovieObj} />
      { !shouldContinue ? <></> :
      <Card movieObj={movieObj} />}
    </div>
  );
};

export default Home;
