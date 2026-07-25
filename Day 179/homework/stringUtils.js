function uppercase(str){
    console.log(str.toUpperCase())
}

function reverse(str){
    console.log(str.split("").reverse().join(""))
}

module.exports = {
    uppercase,
    reverse
}