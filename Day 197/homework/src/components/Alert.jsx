function Alert(){
    function HandleClick(){
        alert('Hello World!')
    }
    return <button onClick={HandleClick}>Click</button>
}
export {Alert}