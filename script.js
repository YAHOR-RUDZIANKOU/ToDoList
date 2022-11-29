const button = document.querySelector("#button");
const input = document.querySelector("#input");
const list = document.querySelector("#list");
button.addEventListener("click", addElements);
let increment = 0;

function addElements() {
    input.focus();
    const value = input.value.trim();
    if (value.length > 25 || value.length === 0) {
        input.classList.add("mistake");
    } else if (value) {
        input.classList.remove("mistake");
        const li = document.createElement("li");
        li.innerText = value;
        increment++;
        if (!(increment % 2)) {
            li.classList.add("red");
        } else {
            li.classList.add("green");
        }
        list.appendChild(li)
    }
    input.value = "";
}

addEventListener("keydown", buttonPress=event=>{
    if (event.code === "Enter") {
        addElements();
    }
});
