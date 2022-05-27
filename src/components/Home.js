import React,{useState} from "react";
import Navbar from "./Navbar";
import './Home.css'
import Card from './Card'

const Home = () => {
  
  const [movieObj, setMovieObj] = useState({});
  if(movieObj.length !== 0) console.log(movieObj);
  return (
    <div className="home">
      <Navbar className="navbar" movieObj={movieObj} setMovieObj={setMovieObj} />
      { Object.keys(movieObj).length === 0 ? <></> :
      <Card movieObj={movieObj} />}
    </div>
  );
};

export default Home;
