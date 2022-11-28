const button = document.querySelector("#button");
const input = document.querySelector("#input");
const list = document.querySelector("#list");
button.addEventListener("click", addElements);
let increment = 0;
let inc = 0;

function addElements() {
    input.focus();
    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] === " ") {
            inc++;
        }
    }
    if (inc > 5) {
        input.classList.add("mistake");
    }
    const value = input.value.trim();
    if (input.value.length > 25) {
        input.classList.add("mistake");

    } else if (value) {
        input.classList.remove("mistake");
        const li = document.createElement("li");
        li.innerText = value;
        increment++;
        if (!(increment % 2)) {
            li.classList.add("red");
        } else li.classList.add("green");
        list.append(li)
    }
    input.value = "";
}

addEventListener("keydown", buttonPress);

function buttonPress(event) {
    if (event.code === "Enter") {
        addElements();
    }
}