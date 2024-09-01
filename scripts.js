let tasks = [];

function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
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
    }</span>
            <div>
                <button onclick="toggleComplete(${index})">${
      task.completed ? "Batal" : "Selesai"
    }</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Hapus</button>
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
  if (newTaskText !== null) {
    tasks[index].text = newTaskText.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
