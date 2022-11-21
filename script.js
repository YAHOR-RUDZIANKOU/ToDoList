let button = document.querySelector(".button");
let input = document.querySelector(".input");
button.addEventListener("click", addList);
let increment = 0;
function addList() {
    let value = input.value.trim();
    if (input.value.length > 25) {
        alert("Ошибка");
        input.value = "";
    } else if (value) {
        input.value = "";
        let li = document.createElement("li");
        li.innerText = value;
        increment++;
        if (increment % 2 === 0) {
            li.classList.add("red");
        } else li.classList.add("green");
        document.body.append(li)
    }
}
addEventListener("keydown", buttonPress);

function buttonPress(event) {
    if (event.code === "Enter") {
        addList();
    }
}