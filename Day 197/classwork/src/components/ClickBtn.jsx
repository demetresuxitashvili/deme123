function ClickBtn(){
    function HandleClick(e){
        e.target.id = "btn"
    }
    return <button onClick={HandleClick}>Click</button>
}

export default ClickBtn