const formSteps = document.querySelectorAll(".form-step");
const progress = document.getElementById("progress");
const steps = document.querySelectorAll(".step");
let currentStep = 0;

document.querySelectorAll(".btn-next").forEach((button) => {
  button.addEventListener("click", () => {
    currentStep++;
    updateForm();
  });
});

document.querySelectorAll(".btn-prev").forEach((button) => {
  button.addEventListener("click", () => {
    currentStep--;
    updateForm();
  });
});

document.getElementById("addTask").addEventListener("click", () => {
  const taskContainer = document.getElementById("tasksContainer");
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML = `
    <label>משימה חדשה:</label>
    <input type="text" class="task-name" required>
    <label>תעדוף:</label>
    <select class="task-priority">
      <option value="high">גבוה</option>
      <option value="medium">בינוני</option>
      <option value="low">נמוך</option>
    </select>
    <label>תאריך התחלה:</label>
    <input type="date" class="task-start-date">
    <label>תאריך סיום:</label>
    <input type="date" class="task-end-date">
    <label>סטטוס:</label>
    <select class="task-status">
      <option value="not_started">לא התחיל</option>
      <option value="in_progress">בתהליך</option>
      <option value="completed">הושלם</option>
    </select>
  `;
  taskContainer.appendChild(newTask);
});

document.getElementById("addTeamMember").addEventListener("click", () => {
  const teamContainer = document.getElementById("teamContainer");
  const newMember = document.createElement("div");
  newMember.classList.add("team-member");
  newMember.innerHTML = `
    <label>שם חבר צוות חדש:</label>
    <input type="text" class="team-member-name" required>
    <label>תחום אחריות:</label>
    <input type="text" class="team-member-role" required>
    <label>צור קשר:</label>
    <input type="text" class="team-member-contact">
  `;
  teamContainer.appendChild(newMember);
});

document.getElementById("saveJson").addEventListener("click", () => {
  const projectData = {
    projectName: document.getElementById("projectName").value,
    projectDescription: document.getElementById("projectDescription").value,
    category: document.getElementById("category").value,
    startDate: document.getElementById("startDate").value,
    endDate: document.getElementById("endDate").value,
    projectStatus: document.getElementById("projectStatus").value,
    tasks: Array.from(document.querySelectorAll(".task")).map((task) => ({
      name: task.querySelector(".task-name").value,
      priority: task.querySelector(".task-priority").value,
      startDate: task.querySelector(".task-start-date").value,
      endDate: task.querySelector(".task-end-date").value,
      status: task.querySelector(".task-status").value,
    })),
    team: Array.from(document.querySelectorAll(".team-member")).map(
      (member) => ({
        name: member.querySelector(".team-member-name").value,
        role: member.querySelector(".team-member-role").value,
        contact: member.querySelector(".team-member-contact").value,
      })
    ),
    projectManager: {
      name: document.getElementById("projectManagerName").value,
      contact: document.getElementById("projectManagerContact").value,
    },
    budget: document.getElementById("budget").value,
    priorityLevel: document.getElementById("priorityLevel").value,
    objectives: document.getElementById("objectives").value,
    currentPhase: document.getElementById("currentPhase").value,
    risks: document.getElementById("risks").value,
    changeLog: document.getElementById("changeLog").value,
    riskManagementPlan: document.getElementById("riskManagementPlan").value,
    qualityPlan: document.getElementById("qualityPlan").value,
    communicationPlan: document.getElementById("communicationPlan").value,
    resources: document.getElementById("resources").value,
    approvals: document.getElementById("approvals").value,
    progressTracking: document.getElementById("progressTracking").value,
    progressReports: document.getElementById("progressReports").value,
    lessonsLearned: document.getElementById("lessonsLearned").value,
    documentation: document.getElementById("documentation").value,
    overallStartDate: document.getElementById("overallStartDate").value,
    overallEndDate: document.getElementById("overallEndDate").value,
  };

  const blob = new Blob([JSON.stringify(projectData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.getElementById("downloadLink");
  link.href = url;
  link.download = "project-data.json";
  link.click();
});

function updateForm() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("form-step-active", index === currentStep);
    steps[index].classList.toggle("active", index === currentStep);
  });

  progress.style.width = `${(currentStep / (formSteps.length - 1)) * 100}%`;
}

updateForm();
