function UserList({props}){
    let res = props.map((x, index) => 
        <ul key={'user_' + index}>
            <li>{x.name}</li>
            <img src={x.avatar} />
        </ul>
    )
    return (
        <div>{props}</div>
    )
}

export {UserList}