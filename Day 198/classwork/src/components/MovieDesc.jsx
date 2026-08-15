
function MovieDesc({title, year, raiting}){
    return (
        <div>
            <h1>{title}</h1>
            <h3>{year}</h3>
            <p>{raiting}</p>
        </div>
    )
}

export default MovieDesc