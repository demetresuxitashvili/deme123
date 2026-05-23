// Date ობიექტის, setInterval-ის და clearInterval-ის გამოყენებით შექმენით პროგრამა, რომელიც ყოველ 2 წამში საიტზე ვიზუალურად გამოიტანს ამჟამინდელ თარიღს (წამებში, როგორც გაკვეძთილზე გავაკეთეთ), Interval-ი უნდა გაჩერდეთ 8 წამის შემდეგ.
let p = document.getElementById("p")

let setintervali = setInterval(myTimer, 2000)

function myTimer(){
    p.textContent = Date.now()
}

setTimeout(() => {
    clearInterval(setintervali)
    p.textContent = "timer stoped"
}, 9000)