const buttonEl = document.getElementById("addTodo");

let count = 1;

function deleteTodo(index){
    const element = document.getElementById(index);
    element.parentElement.removeChild(element);
}

function addTodo(){
    const inputElement = document.querySelector("input");
    const inputText = inputElement.value;

    const divEl = document.createElement("h4");
    divEl.setAttribute("id",count);
    divEl.innerHTML = `${inputText} <button onclick='deleteTodo(${count})'>Delete</button>`;
    count++;
    const parentElement = document.querySelector("body");
    parentElement.appendChild(divEl);
}

buttonEl.addEventListener('click',addTodo);