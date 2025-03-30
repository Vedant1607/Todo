const buttonEl = document.getElementById("addTodo");

let count = 0;

function deleteTodo(index){
    const element = document.getElementById(index);
    // element.parentElement.removeChild(element);
    if (element) {
        element.remove();
    } else {
        console.error(`Task with ID task-${index} not found.`);
    }
}

function addTodo(){
    const input = document.querySelector('input');
    const inputText = input.value.trim();

    if (inputText === ""){
        alert("Task cannot be empty!");
        return;
    }

    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("id",count)

    const taskText = document.createElement("h4");
    taskText.textContent = inputText;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener("click",() => deleteTodo(count));

    taskContainer.appendChild(taskText);
    taskContainer.appendChild(delBtn);

    document.body.appendChild(taskContainer);

    input.value = "";
}
count++;

buttonEl.addEventListener('click',addTodo);