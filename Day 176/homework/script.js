import data from "./data.json" with { type: "json" };

const containerDiv = document.getElementById("container");
const buttons = document.querySelectorAll("button");

let mode = "weekly"; 

const renderCards = () => {
    containerDiv.innerHTML = "";

    data.forEach(obj => {
        containerDiv.innerHTML += `
            <h1>${obj.title}</h1>
            <h1>${obj.timeframes[mode].current}</h1>
            <h1>${obj.timeframes[mode].previous}</h1>
        `;
    });
};

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        mode = btn.dataset.mode;

        renderCards();
    });
});

renderCards();