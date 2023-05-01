export const MovieCard = (props) => {
    const {name, onFavouriteClick, isFavourite} = props;

    const handleClick = () =>{
        console.log(`time for ${name}`);
        onFavouriteClick(name);
    };

    return (
            <li>
                <article>
                    <h3>{name}</h3>
                    <button onClick={handleClick}>{isFavourite ? "❤" : "🤍"}</button>
                </article>
            </li>   
    );
}
 
    