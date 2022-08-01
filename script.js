let form = document.getElementById("form");
let todoInput = document.getElementById("todo-input");
let todosUl = document.getElementById("todos")

let todo = JSON.parse(window.localStorage.getItem('todos'));

if(todo) {
  todo.forEach(todo => {
    addTodo(todo)
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todos) {

  let todoText = todoInput.value;
  if(todos){
    todoText = todo.text;
  }

  if(todoText) {
    let todoEl = document.createElement("li");
    todoEl.classList.add("todo");

    if(todo.completed) {
      todo.classList.add("completed");
    }
  
        todoEl.innerText = todoText;
        todoEl.addEventListener("click" , (e) => {
          todoEl.classList.toggle("completed");
           updateLs();
        });
  
        todoEl.addEventListener("contextmenu", (e) => {
          e.preventDefault()
          todoEl.remove()
           updateLs();
        }); 
  
        todosUl.appendChild (todoEl);
        todoInput.value="";
        updateLs();
  }

}

function updateLs(){
  let todosEl = document.querySelectorAll("li");

  let todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  })

  localStorage.setItem("todos",JSON.stringify(todos));
}