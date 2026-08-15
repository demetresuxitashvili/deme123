function Cart({imgSrc, description}){
    return (
        <div>
            <img src={imgSrc}/>
            <p>{description}</p>
            <button>Buy Now</button>
        </div>
    )
}

export {Cart}