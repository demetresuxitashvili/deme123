function RatingStars({Rating}){
    let res = ""
    for(let i = 0; i < 5; i ++){
        if(i <= Rating){
            res += "★"
        }
        else{
            res += "☆"
        }
    }
    return (
        <div>
            {res}
        </div>
    )
}

export {RatingStars}