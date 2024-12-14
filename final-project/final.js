let users = {};
let tasks = {};
let loggedInUser = null;

function validatePassword(password) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isValidLength = password.length >= 8;

  return hasUpperCase && hasNumber && isValidLength;
}

function login(username, password) {
  if (!validatePassword(password)) {
    document.getElementById("login-error").innerText =
      "Password must be at least 8 characters long, have at least 1 number, and 1 capital letter.";
    document.getElementById("login-error").style.display = "block";
    return;
  }

  if (users[username] && users[username] === password) {
    loggedInUser = username;
    displayDashboard();
  } else {
    document.getElementById("login-error").innerText =
      "Invalid username or password.";
    document.getElementById("login-error").style.display = "block";
  }
}

function displayDashboard() {
  document.getElementById(
    "logged-in-status"
  ).innerText = `Logged in as ${loggedInUser}`;
  document.getElementById("login-section").style.display = "none";
  document.getElementById("dashboard-section").style.display = "block";
  displayTaskList();
}

function logout() {
  loggedInUser = null;
  document.getElementById("login-section").style.display = "block";
  document.getElementById("dashboard-section").style.display = "none";
}

function addTask(taskText, taskProperty) {
  if (!loggedInUser) return;
  tasks[loggedInUser] = tasks[loggedInUser] || [];
  tasks[loggedInUser].push({
    text: taskText,
    property: taskProperty,
    done: false,
  });
  displayTaskList();
}

function displayTaskList() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  const userTasks = tasks[loggedInUser] || [];

  userTasks.forEach((task, index) => {
    const taskElement = createTaskElement(task, index);
    taskList.appendChild(taskElement);
  });
}

function createTaskElement(task, index) {
  const taskElement = document.createElement("div");

  taskElement.classList.add("task");
  if (task.done) {
    taskElement.classList.add("done");
  }

  const taskText = document.createElement("h4");
  taskText.innerText = task.text;
  taskText.onclick = () => toggleTaskDone(index);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("red");
  deleteButton.innerText = "Remove";
  deleteButton.onclick = () => deleteTask(index);

  const editButton = document.createElement("button");
  editButton.classList.add("blue");
  editButton.innerText = "Change Text";
  editButton.onclick = () => editTask(index);

  const categorySelect = document.createElement("select");
  ["change category", "outdoor", "indoor"].forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.innerText = category;
    categorySelect.appendChild(option);
  });
  categorySelect.value = task.property;
  categorySelect.onchange = (e) => changeTaskCategory(index, e.target.value);

  taskElement.append(taskText, deleteButton, editButton, categorySelect);
  return taskElement;
}

function toggleTaskDone(index) {
  tasks[loggedInUser][index].done = !tasks[loggedInUser][index].done;
  displayTaskList();
}

function deleteTask(index) {
  tasks[loggedInUser].splice(index, 1);
  displayTaskList();
}

function editTask(index) {
  const newTaskText = prompt("new name", tasks[loggedInUser][index].text);
  if (newTaskText) {
    tasks[loggedInUser][index].text = newTaskText;
    displayTaskList();
  }
}

function changeTaskCategory(index, newCategory) {
  tasks[loggedInUser][index].property = newCategory;
  displayTaskList();
}

document.getElementById("login-button").addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    if (!users[username]) users[username] = password;
    login(username, password);
  } else {
    document.getElementById("login-error").innerText =
      "Username and password must be filled in.";
    document.getElementById("login-error").style.display = "block";
  }
});

document.getElementById("logout-button").addEventListener("click", logout);

document.getElementById("add-task-button").addEventListener("click", () => {
  const taskText = prompt("new task");
  if (taskText) {
    addTask(taskText, "change category");
  }
});
