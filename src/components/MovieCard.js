import React from 'react'

function MovieCard({movieObj}) {
    return (
    <div>
        <ul>
            <li key={movieObj.Title}>{movieObj.Title}</li>
            <li key={movieObj.Year}>{movieObj.Year}</li>
            <li key={movieObj.imdbRating}>{movieObj.imdbRating}</li>
            <li key={movieObj.Language}>{movieObj.Language}</li>
            <li key={1}>{movieObj.Poster}</li>
        </ul>
    </div>
  )
}

export default MovieCard