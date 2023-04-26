import { MovieCard } from "./MovieCard"

export const MovieList = (props)=>{

    const {list} = props;
    
    return (
        <ul>
            <MovieCard name="Lord of the Rings" />
            <MovieCard name="Back to the Future" />
            <MovieCard name="Titanic" />
        </ul>

    );
}

