let tasks = [];

function addTask() {
  const taskInput = document.getElementById("new-task");
  const dueDateInput = document.getElementById("due-date");
  const taskText = taskInput.value.trim();
  const dueDate = dueDateInput.value;
  if (taskText !== "" && dueDate !== "") {
    tasks.push({ text: taskText, dueDate: dueDate, completed: false });
    taskInput.value = "";
    dueDateInput.value = "";
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
            <span class="${task.completed ? "completed" : ""}">${
      task.text
    } (Tenggat: ${task.dueDate})</span>
            <div>
                <button onclick="toggleComplete(${index})">${
      task.completed ? "Cancel" : "Done"
    }</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
    taskList.appendChild(taskItem);
  });
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const newTaskText = prompt("Edit tugas:", tasks[index].text);
  const newDueDate = prompt("Edit tanggal tenggat:", tasks[index].dueDate);
  if (newTaskText !== null && newDueDate !== null) {
    tasks[index].text = newTaskText.trim();
    tasks[index].dueDate = newDueDate;
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
