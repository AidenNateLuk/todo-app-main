const toggleBtn = document.getElementById("toggle-btn");

function toggleTheme() {
  if (toggleBtn.classList.contains("dark")) {
    document.querySelectorAll("*").forEach(function (element) {
      element.classList.remove("dark");
    });
  } else {
    document.body.classList.add("dark");

    document.querySelectorAll("*").forEach(function (element) {
      element.classList.add("dark");
    });

    document.querySelectorAll("*").forEach(function (element) {});
  }
}

function removeFromDisplay(taskElement) {
  if (taskElement && taskElement.parentNode) {
    taskElement.parentNode.removeChild(taskElement);
  }
}

function removeTask(event) {
  const clickedImage = event.target;
  const parentTask = clickedImage.parentNode;
  removeFromDisplay(parentTask);
}

function appendToDisplay() {
  const tasks = document.querySelectorAll("#tskcnt .task");
  const taskInputText = document.getElementById("task-input-text");
  if (tasks.length < 5 && taskInputText.value !== "") {
    const newTask = document.createElement("div");
    newTask.className = "task";

    const newCheckBox = document.createElement("input");
    newCheckBox.type = "checkbox";
    newCheckBox.className = "task-checkbox";

    const newTextInput = document.createElement("input");
    newTextInput.type = "text";
    newTextInput.readOnly = true;
    newTextInput.className = "display";

    newTextInput.value = taskInputText.value;

    const newImage = document.createElement("img");
    newImage.src = "images/icon-cross.svg";
    newImage.alt = "";

    newTask.appendChild(newCheckBox);
    newTask.appendChild(newTextInput);
    newTask.appendChild(newImage);

    newImage.addEventListener("click", removeTask);

    const firstTask = document.querySelector("#tskcnt .task");

    document.getElementById("tskcnt").insertBefore(newTask, firstTask);
  } else {
    console.log("Maximum number of task elements reached.");
  }
  taskInputText.value = "";
}
