// DOM elements
const taskBoxes = document.querySelectorAll(".task-box");
const categoryLabels = document.querySelectorAll(".category");
const taskItems = document.querySelectorAll(".task-item");
const taskCheckboxes = document.querySelectorAll(".task-item");

// Event listeners for category filters
categoryLabels.forEach((label, index) => {
  label.addEventListener("click", () => {
    filterTasks(index + 1);
  });
});

// Function to filter tasks by category
function filterTasks(categoryIndex) {
  // First hide all tasks
  taskItems.forEach((task) => {
    task.style.display = "none";
  });

  // Show only tasks that belong to the selected category
  document.querySelectorAll(`#opt-${categoryIndex} ~ .task`).forEach((task) => {
    task.style.display = "flex";
  });

  // Uncheck other categories and highlight the current one
  categoryLabels.forEach((label, index) => {
    if (index + 1 === categoryIndex) {
      label.style.borderBottom = `2px solid var(--checkbox-color)`;
    } else {
      label.style.borderBottom = `1px solid #ddd`;
    }
  });
}

// Mark tasks as complete/incomplete
taskCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const taskLabel = checkbox.nextElementSibling;
    if (checkbox.checked) {
      taskLabel.classList.add("completed");
    } else {
      taskLabel.classList.remove("completed");
    }
  });
});

// Event listener for opening task details (optional)
taskBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    toggleTaskDetails(box);
  });
});

// Function to toggle task details
function toggleTaskDetails(taskBox) {
  const moreButton = taskBox.querySelector(".more-button");
  const taskDetails = taskBox.querySelector(".task-details");

  if (taskDetails) {
    taskDetails.style.display =
      taskDetails.style.display === "none" ? "block" : "none";
  }
}

// Example function to add new tasks dynamically (optional)
function addNewTask(taskName, category, members) {
  const taskWrapper = document.querySelector(".tasks-wrapper");
  const newTask = document.createElement("div");
  newTask.classList.add("task-box", category);

  const membersHTML = members
    .map((member) => `<img src="${member}" alt="member">`)
    .join("");

  newTask.innerHTML = `
    <div class="time">Just now</div>
    <div class="task-name">${taskName}</div>
    <div class="members">${membersHTML}</div>
    <div class="more-button"></div>
  `;

  taskWrapper.appendChild(newTask);
  // Add functionality to the new task as well
  newTask.addEventListener("click", () => toggleTaskDetails(newTask));
}

// Optional: Add event listener to the "Add Task" button (if exists)
const addTaskButton = document.querySelector(".add-task");
if (addTaskButton) {
  addTaskButton.addEventListener("click", () => {
    const taskName = prompt("Enter task name:");
    const category = prompt("Enter category (yellow, blue, red, green):");
    addNewTask(taskName, category, ["member1.jpg", "member2.jpg"]);
  });
}
