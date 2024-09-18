function addTask() {
  const taskInput = document.getElementById("task");
  const taskList = document.getElementById("task-list");

  if (taskInput.value.trim() === "") {
    alert("נא להכניס משימה");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = taskInput.value;

  // Create edit and delete buttons
  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editButton = document.createElement("button");
  editButton.textContent = "ערוך";
  editButton.className = "edit-btn";
  editButton.onclick = function () {
    editTask(listItem);
  };

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "מחק";
  deleteButton.className = "delete-btn";
  deleteButton.onclick = function () {
    deleteTask(listItem);
  };

  actions.appendChild(editButton);
  actions.appendChild(deleteButton);
  listItem.appendChild(actions);

  taskList.appendChild(listItem);

  taskInput.value = "";
}

function submitEvaluation() {
  const achievements = document.getElementById("achievements").value;
  const improvements = document.getElementById("improvements").value;

  if (achievements.trim() === "" || improvements.trim() === "") {
    alert("נא למלא את כל השדות");
    return;
  }

  alert("הערכה נשמרה בהצלחה!");
  document.getElementById("evaluation-form").reset();
}

function clearTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
}

function deleteTask(taskElement) {
  const taskList = document.getElementById("task-list");
  taskList.removeChild(taskElement);
}

function editTask(taskElement) {
  const newTask = prompt("ערוך את המשימה:", taskElement.firstChild.textContent);
  if (newTask !== null) {
    taskElement.firstChild.textContent = newTask;
  }
}

function generateSummary() {
  const taskListItems = document.querySelectorAll("#task-list li");
  const achievements = document.getElementById("achievements").value.trim();
  const improvements = document.getElementById("improvements").value.trim();

  let summary = "<h3>סיכום משימות</h3>";
  if (taskListItems.length === 0) {
    summary += "<p>אין משימות.</p>";
  } else {
    summary += "<ul>";
    taskListItems.forEach((item) => {
      summary += `<li>${item.firstChild.textContent}</li>`;
    });
    summary += "</ul>";
  }

  summary += "<h3>הערכה יומית</h3>";
  summary += `<p><strong>מה הצלחת להשיג:</strong> ${
    achievements || "לא הוזן"
  }</p>`;
  summary += `<p><strong>מה נדרש לשפר:</strong> ${
    improvements || "לא הוזן"
  }</p>`;

  document.getElementById("summary-content").innerHTML = summary;
}

function saveToFile() {
  const taskListItems = document.querySelectorAll("#task-list li");
  const tasks = Array.from(taskListItems).map(
    (item) => item.firstChild.textContent
  );
  const achievements = document.getElementById("achievements").value;
  const improvements = document.getElementById("improvements").value;

  const data = {
    tasks: tasks,
    achievements: achievements,
    improvements: improvements,
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function loadFromFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const data = JSON.parse(e.target.result);

    // Clear current data
    clearTasks();
    document.getElementById("achievements").value = "";
    document.getElementById("improvements").value = "";

    // Load tasks
    data.tasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.textContent = task;

      // Create edit and delete buttons
      const actions = document.createElement("div");
      actions.className = "task-actions";

      const editButton = document.createElement("button");
      editButton.textContent = "ערוך";
      editButton.className = "edit-btn";
      editButton.onclick = function () {
        editTask(listItem);
      };

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "מחק";
      deleteButton.className = "delete-btn";
      deleteButton.onclick = function () {
        deleteTask(listItem);
      };

      actions.appendChild(editButton);
      actions.appendChild(deleteButton);
      listItem.appendChild(actions);

      document.getElementById("task-list").appendChild(listItem);
    });

    // Load evaluations
    document.getElementById("achievements").value = data.achievements || "";
    document.getElementById("improvements").value = data.improvements || "";
  };
  reader.readAsText(file);
}

document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
