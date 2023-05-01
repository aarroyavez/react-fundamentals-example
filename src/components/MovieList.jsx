import { useState } from "react";
import { MovieCard } from "./MovieCard"

export const MovieList = (props)=>{
    const {list} = props;
    const [favourites, setFavourites] = useState([]); 

    const handleFavouriteClick = (movieName) => {
        console.log(`favourite clicked from ${movieName}`)
    
        if(!favourites.includes(movieName)){
            setFavourites([...favourites, movieName]);
        }
    };

    console.log({favourites});

    return (
        <ul>
            {
            list.map((movie) => (
                <MovieCard 
                key={movie.name}
                name={movie.name} 
                onCheckTimeClick={handleFavouriteClick} 
                />
        ))}  
        </ul>
    );
};

