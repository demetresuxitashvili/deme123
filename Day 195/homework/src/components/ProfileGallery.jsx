function ProfileGallery([Users]){
    let res = Users.map((el, index) => 
        <div key={"user_" + index}>
            <img src={el.avatarUrl} alt="" />
            <h1>{el.name}</h1>
            <h1>{el.age}</h1>
            <h1>{el.isAdmin === true ? "admin" : "person" }</h1>
        </div>
    )
    return (
        <div>{res}</div>
    )
}

export {ProfileGallery}