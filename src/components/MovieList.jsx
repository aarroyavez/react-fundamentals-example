import { MovieCard; } from "./MovieCard"

export const MovieList = ()=>{
    return (
        <ul>
            <li>
                <article>
                    <h3>Lord of the Rings</h3>
                    <button>Check times</button>
                </article>
            </li>
            <MovieCard name="Lord of the Rings" />
            <MovieCard name="Back to the Future" />

    );
}

