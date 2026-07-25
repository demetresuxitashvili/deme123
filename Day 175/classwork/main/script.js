const text = document.getElementById('text')
const name = document.getElementById("name")
const role = document.getElementById("role")
const img = document.getElementById("img")
const prev = document.getElementById("prev")
const next = document.getElementById("next")


let index = 0

const imgContainer = [
    "./images/image-tanya.jpg",
    "./images/image-john.jpg",
]

const textContainer = [
    
    `"I’ve been interested in coding for a while but never taken the jump, until now. 
      I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
      excited about the future."`,
    

    `" If you want to lay the best foundation possible Id recommend taking this course. 
      The depth the instructors go into is incredible. I now feel so confident about 
      starting up as a professional developer. "`

]

const names = [
    "Tanya sinclair",
    "john Tarkpor"
]

const roles = [
    "UX engineer",
    "Junior Front-end Developer"
]

next.addEventListener('click', () => {
    if(index >= imgContainer.length){
        index = 0
    }

    index++

    img.src = imgContainer[index]
    text.innerHTML = textContainer[index]
    name.innerHTML = names[index]
    role.innerHTML = roles[index]
    
});

prev.addEventListener('click', () => {
    if(index < 0){
        index = imgContainer.length - 1
    }

    index--;
    
    img.src = imgContainer[index]
    text.innerHTML = textContainer[index]
    name.innerHTML = names[index]
    role.innerHTML = roles[index]
})