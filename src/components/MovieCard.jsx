export const MovieCard = (props) => {
    const {name} = props;

    return (
        <ul>
            <li>
                <article>
                    <h3>{name}</h3>
                    <button>Check times</button>
                </article>
            </li>
        </ul>
    );
}

    