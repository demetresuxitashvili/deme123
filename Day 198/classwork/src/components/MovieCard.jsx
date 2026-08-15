import MovieDesc from "./MovieDesc";
import MovieImg from "./MovieImg";

function MovieCard(){
    function alertFunc(){
        alert("added")
    }
    return (
        <div>
            <MovieImg/>
            <MovieDesc title={"spider man 4"} year={2026} raiting={"⭐⭐⭐⭐⭐"}/>
            <button onClick={alertFunc}>add to Favorites</button>
        </div>
    )
}