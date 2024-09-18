const formSteps = document.querySelectorAll(".form-step");
const progress = document.querySelector(".progress");
const steps = document.querySelectorAll(".step");
const summaryContainer = document.getElementById("summaryContainer");
let currentStep = 0;

document.querySelectorAll(".btn-next").forEach((button) => {
  button.addEventListener("click", () => {
    if (validateStep(currentStep)) {
      currentStep++;
      updateForm();
    }
  });
});

document.querySelectorAll(".btn-prev").forEach((button) => {
  button.addEventListener("click", () => {
    currentStep--;
    updateForm();
  });
});

steps.forEach((step, index) => {
  step.addEventListener("click", () => {
    if (index !== currentStep) {
      currentStep = index;
      updateForm();
    }
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
  link.style.display = "block";
});

document.getElementById("finalize").addEventListener("click", () => {
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

  summaryContainer.innerHTML = `<pre>${JSON.stringify(
    projectData,
    null,
    2
  )}</pre>`;
  document
    .querySelector(".form-step-active")
    .classList.remove("form-step-active");
  document.querySelectorAll(".form-step")[6].classList.add("form-step-active");
  progress.style.width = "100%";
});

function validateStep(step) {
  const currentFormStep = formSteps[step];
  const inputs = currentFormStep.querySelectorAll(
    "input[required], textarea[required], select[required]"
  );
  let valid = true;
  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("error");
      valid = false;
    } else {
      input.classList.remove("error");
    }
  });
  return valid;
}

function updateForm() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("form-step-active", index === currentStep);
  });

  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  const progressPercent = (currentStep / (formSteps.length - 1)) * 100;
  progress.style.width = `${progressPercent}%`;
}

document.getElementById("saveJson").addEventListener("click", () => {
  const projectData = {
    projectName: document.getElementById("projectName").value,
    projectDescription: document.getElementById("projectDescription").value,
    category: document.getElementById("category").value,
    startDate: document.getElementById("startDate").value,
    endDate: document.getElementById("endDate").value,
    projectStatus: document.getElementById("projectStatus").value,
    priorityLevel: document.getElementById("priorityLevel").value,
    objectives: document.getElementById("objectives").value,
    currentPhase: document.getElementById("currentPhase").value,
    risks: document.getElementById("risks").value,
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
    budget: document.getElementById("budget").value,
  };

  // Convert to JSON string
  const jsonStr = JSON.stringify(projectData, null, 2);

  // Create a Blob for the file
  const blob = new Blob([jsonStr], { type: "application/json" });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Trigger file download
  const downloadLink = document.getElementById("downloadLink");
  downloadLink.href = url;
  downloadLink.download = `${projectData.projectName}_data.json`;
  downloadLink.style.display = "block";
  downloadLink.click();
  downloadLink.style.display = "none";
});
