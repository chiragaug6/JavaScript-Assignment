let addButton = document.getElementById("add-btn");
let todoInput = document.getElementById("todo-input");

addButton.addEventListener("click", addTodo);

function addTodo(e) {
    inputValue = todoInput.value;

    let newLi = document.createElement("li");
    // newLi.classList.add("list-group-item");
    newLi.className = "list-group-item d-flex justify-content-between";
    newLi.innerHTML =
        `<h3 class="flex-grow-1"> ${inputValue}</h3>`

    let listPerent = document.getElementById("listPerent");
    listPerent.appendChild(newLi);
}