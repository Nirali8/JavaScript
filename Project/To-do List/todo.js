const taskAdd = document.getElementById("taskAdd");
const taskList = document.getElementById("taskList");
function addTask() {
  const taskText = taskAdd.value;
  if (taskText !== "") {
    let li = document.createElement("li");
    li.textContent = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(checkbox);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskAdd.value = "";
  }
}
function deleteTask(event) {
  console.log("here");
  const task = event.target.parentElement;
  taskList.removeChild(task);
}
