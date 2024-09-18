// Function to add a goal
function addGoal(name, description, deadline, priority) {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];

  const newGoal = { name, description, deadline, priority };
  goals.push(newGoal);

  localStorage.setItem("goals", JSON.stringify(goals));
}

// Function to add a project
function addProject(name, description, deadline, priority) {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  const newProject = { name, description, deadline, priority };
  projects.push(newProject);

  localStorage.setItem("projects", JSON.stringify(projects));
}

// Function to delete a goal
function deleteGoal(index) {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.splice(index, 1);
  localStorage.setItem("goals", JSON.stringify(goals));
  displayGoals();
}

// Function to delete a project
function deleteProject(index) {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
  displayProjects();
}

// Function to edit a goal
function editGoal(index, newName, newDescription, newDeadline, newPriority) {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  const goal = goals[index];
  if (goal) {
    goal.name = newName;
    goal.description = newDescription;
    goal.deadline = newDeadline;
    goal.priority = newPriority;
    localStorage.setItem("goals", JSON.stringify(goals));
    displayGoals();
  }
}

// Function to edit a project
function editProject(index, newName, newDescription, newDeadline, newPriority) {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const project = projects[index];
  if (project) {
    project.name = newName;
    project.description = newDescription;
    project.deadline = newDeadline;
    project.priority = newPriority;
    localStorage.setItem("projects", JSON.stringify(projects));
    displayProjects();
  }
}

// Function to display goals
function displayGoals() {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];

  const goalList = document.getElementById("goal-list");
  goalList.innerHTML = "";

  goals.forEach((goal, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
          <strong>${goal.name}</strong>
          <p>${goal.description}</p>
          <p><strong>מועד סיום:</strong> ${goal.deadline}</p>
          <p><strong>סדר עדיפויות:</strong> ${goal.priority}</p>
          <button class="edit-button" onclick="editGoalPrompt(${index})">ערוך</button>
          <button class="delete-button" onclick="deleteGoal(${index})">מחק</button>
      `;
    goalList.appendChild(li);
  });
}

// Function to display projects
function displayProjects() {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  const projectList = document.getElementById("project-list");
  projectList.innerHTML = "";

  projects.forEach((project, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
          <strong>${project.name}</strong>
          <p>${project.description}</p>
          <p><strong>מועד סיום:</strong> ${project.deadline}</p>
          <p><strong>סדר עדיפויות:</strong> ${project.priority}</p>
          <button class="edit-button" onclick="editProjectPrompt(${index})">ערוך</button>
          <button class="delete-button" onclick="deleteProject(${index})">מחק</button>
      `;
    projectList.appendChild(li);
  });
}

// Function to handle edit goal prompt
function editGoalPrompt(index) {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  const goal = goals[index];

  const name = prompt("חדש שם היעד:", goal.name);
  const description = prompt("חדש תיאור היעד:", goal.description);
  const deadline = prompt("חדש מועד סיום:", goal.deadline);
  const priority = prompt("חדש סדר עדיפויות:", goal.priority);

  if (name && description && deadline && priority) {
    editGoal(index, name, description, deadline, priority);
  }
}

// Function to handle edit project prompt
function editProjectPrompt(index) {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const project = projects[index];

  const name = prompt("חדש שם הפרויקט:", project.name);
  const description = prompt("חדש תיאור הפרויקט:", project.description);
  const deadline = prompt("חדש מועד סיום:", project.deadline);
  const priority = prompt("חדש סדר עדיפויות:", project.priority);

  if (name && description && deadline && priority) {
    editProject(index, name, description, deadline, priority);
  }
}

// Function to create a performance chart
function createPerformanceChart() {
  // Implement chart creation logic here
}

// Function to download data as JSON
function downloadData() {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  const data = {
    goals,
    projects,
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "data.json";
  a.click();

  URL.revokeObjectURL(url);
}

// Function to handle file upload
function handleFileUpload(file) {
  const reader = new FileReader();

  reader.onload = function (event) {
    try {
      const data = JSON.parse(event.target.result);
      if (data.goals) {
        localStorage.setItem("goals", JSON.stringify(data.goals));
        displayGoals();
      }
      if (data.projects) {
        localStorage.setItem("projects", JSON.stringify(data.projects));
        displayProjects();
      }
    } catch (error) {
      alert("Error parsing JSON file");
    }
  };
  reader.readAsText(file);
}

// Event listeners
document.getElementById("add-goal-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("goal-name").value;
  const description = document.getElementById("goal-description").value;
  const deadline = document.getElementById("goal-deadline").value;
  const priority = document.getElementById("goal-priority").value;

  addGoal(name, description, deadline, priority);
  displayGoals();
});

document.getElementById("add-project-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("project-name").value;
  const description = document.getElementById("project-description").value;
  const deadline = document.getElementById("project-deadline").value;
  const priority = document.getElementById("project-priority").value;

  addProject(name, description, deadline, priority);
  displayProjects();
});

document
  .getElementById("download-data")
  .addEventListener("click", downloadData);

document.getElementById("upload-data").addEventListener("click", () => {
  const fileInput = document.getElementById("json-file");
  const file = fileInput.files[0];
  if (file) {
    handleFileUpload(file);
  }
});

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  displayGoals();
  displayProjects();
  createPerformanceChart();
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("add-goal-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // מונע את שליחת הטופס הרגילה
      // לוגיקה לשמירה
      alert("היעד נשמר!");
    });

  document
    .getElementById("add-project-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // מונע את שליחת הטופס הרגילה
      // לוגיקה לשמירה
      alert("הפרויקט נשמר!");
    });
});
