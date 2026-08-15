function UserCard({name, age, avatarUrl, isAdmin}){
    return (
        <div className="card">
            <h1 className="userName">{name}</h1>
            <h1 className="userAge">{age}</h1>
            <img src={avatarUrl} className="userImg" />
            <p className="userAdmin">{isAdmin === true ? "admin" : "person"}</p>
        </div>
    )
}

export {UserCard}