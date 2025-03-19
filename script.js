const buttonEl = document.getElementById("addTodo");

let count = 1;
function addTodo(){
    const inputElement = document.querySelector("input");
    const inputText = inputElement.value;
    const divEl = document.createElement("h4");
    divEl.innerHTML = `${count++}. ${inputText}`;
    const parentElement = document.querySelector("body");
    parentElement.appendChild(divEl);
}

buttonEl.addEventListener('click',addTodo);