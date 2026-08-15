function Book({Booklibrary}){
    let res = Booklibrary.map((el, x) => 
        <div key={'book_' + x} id="Maindiv">
            <img src={el.image} alt="" />
            <h1>{el.title}</h1>
            <h3>{el.author}</h3>
        </div>
    )
    return (
        <div>
            {res}
        </div>
    )
}

export {Book}