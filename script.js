const buttonEl = document.getElementById("addTodo");

let count = 0;
let todos = [];

function addTodo(){
    todos.push({
        ctr:count,
        title:document.querySelector('input').value
    })
    render();
    count++;
}

function deleteTodo(index){
    // todos.pop();
    // todos.splice(index,1);
    todos = todos.filter(todo => todo.ctr !== index);
    render();
}

function createTodoComponent(todo){
    const div = document.createElement('div');
    const text = document.createElement('p');
    const dltbtn = document.createElement('button');

    dltbtn.textContent = 'Delete';
    dltbtn.addEventListener('click',()=>deleteTodo(todo.ctr));

    text.textContent = todo.title;
    div.setAttribute('id',todo.ctr);

    div.appendChild(text);
    div.appendChild(dltbtn);
    
    return div
}

function render(){
    const container = document.getElementById('todos-container');
    container.innerHTML = "";
    document.querySelector("input").value = "";
    for (let i=0;i<todos.length;i++){
        let ele = createTodoComponent(todos[i]);
        container.appendChild(ele);
    }
}

buttonEl.addEventListener('click',addTodo);