import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import companyLogo from '../resources/favicon-16x16.png'
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar({setMovieObj, movieObj}) {
    const [search, setSearch] = useState("");
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
        console.log(search);

        const handleInput = (e)=>{
            setSearch(e.target.value)
        }

        // console.table(movieObj)

        useEffect(()=>{
            if(search === "") return;
            const apiKey = `http://www.omdbapi.com/?t=${search}&apikey=6c9b281c`
            const delayDebounceFn = setTimeout(async() => {
            try {
                let apires = await fetch(apiKey)
                let jres = await apires.json()
                setMovieObj(jres);
            } catch (error) {
                console.log(error);
                setMovieObj({});
            }
          }, 1200)
      
          return () => clearTimeout(delayDebounceFn)
    },[search])

    return (
        <div className='navbar'>
            <div className="logoName">
                <img src={companyLogo} alt="Company logo" />
                <h4>Movie List Generater</h4>
            </div>
            <div className="middleSearch">
                <button>
                <SearchIcon/>
                <input value={search} onChange={handleInput} type="text" placeholder="Search"></input>
                </button>
            </div>
            <div className="profileControls">
                {/* {user && user.email} */}
                <div className="username">{user.email}</div>
                <span><Button variant="contained" onClick={handleLogout}>
                    Log out
                </Button></span>
            </div>
        </div>
    )
}
