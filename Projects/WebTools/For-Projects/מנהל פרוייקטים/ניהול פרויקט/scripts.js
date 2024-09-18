document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const defineGoalsButton = document.getElementById("define-goals");
  const goalInput = document.getElementById("goal-input");
  const addGoalButton = document.getElementById("add-goal");
  const goalList = document.getElementById("goal-list");

  const defineTasksButton = document.getElementById("define-tasks");
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  const defineScheduleButton = document.getElementById("define-schedule");
  const scheduleInput = document.getElementById("schedule-input");
  const addScheduleButton = document.getElementById("add-schedule");
  const scheduleList = document.getElementById("schedule-list");

  const dynamicTaskInput = document.getElementById("dynamic-task-input");
  const addDynamicTaskButton = document.getElementById("add-dynamic-task");
  const dynamicTaskList = document.getElementById("dynamic-task-list");

  const generateReportButton = document.getElementById("generate-report");
  const loadingSpinner = document.getElementById("loading-spinner");
  const reportSection = document.getElementById("report-section");
  const reportContent = document.getElementById("report-content");
  const viewReportsButton = document.getElementById("view-reports");
  const reportsList = document.getElementById("reports-list");
  const reportItems = document.getElementById("report-items");

  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  startButton.addEventListener("click", () => {
    alert("הפרויקט שלך התחיל!");
  });

  // Goal Management
  defineGoalsButton.addEventListener("click", () => {
    goalInput.classList.toggle("hidden");
  });

  addGoalButton.addEventListener("click", () => {
    const goalText = document.getElementById("goal-text").value.trim();
    if (goalText) {
      const goalItem = document.createElement("li");
      goalItem.textContent = goalText;
      goalList.appendChild(goalItem);
      document.getElementById("goal-text").value = "";
    }
  });

  // Task Management
  defineTasksButton.addEventListener("click", () => {
    taskInput.classList.toggle("hidden");
  });

  addTaskButton.addEventListener("click", () => {
    const taskText = document.getElementById("task-text").value.trim();
    if (taskText) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);
      document.getElementById("task-text").value = "";
    }
  });

  // Schedule Management
  defineScheduleButton.addEventListener("click", () => {
    scheduleInput.classList.toggle("hidden");
  });

  addScheduleButton.addEventListener("click", () => {
    const scheduleText = document.getElementById("schedule-text").value.trim();
    if (scheduleText) {
      const scheduleItem = document.createElement("li");
      scheduleItem.textContent = scheduleText;
      scheduleList.appendChild(scheduleItem);
      document.getElementById("schedule-text").value = "";
    }
  });

  // Dynamic Task Management
  addDynamicTaskButton.addEventListener("click", () => {
    const dynamicTaskText = dynamicTaskInput.value.trim();
    if (dynamicTaskText) {
      const dynamicTaskItem = document.createElement("div");
      dynamicTaskItem.classList.add("task-item");
      dynamicTaskItem.innerHTML = `
              <input type="text" value="${dynamicTaskText}" readonly>
              <button class="edit-task">ערוך</button>
              <button class="delete-task">מחק</button>
          `;
      dynamicTaskList.appendChild(dynamicTaskItem);
      dynamicTaskInput.value = "";

      // Edit task functionality
      dynamicTaskItem
        .querySelector(".edit-task")
        .addEventListener("click", () => {
          const inputField = dynamicTaskItem.querySelector("input");
          if (inputField.readOnly) {
            inputField.readOnly = false;
            inputField.focus();
          } else {
            inputField.readOnly = true;
          }
        });

      // Delete task functionality
      dynamicTaskItem
        .querySelector(".delete-task")
        .addEventListener("click", () => {
          dynamicTaskList.removeChild(dynamicTaskItem);
        });
    }
  });

  // Report Generation
  generateReportButton.addEventListener("click", () => {
    loadingSpinner.classList.add("active");
    setTimeout(() => {
      const reportDate = new Date().toLocaleDateString();
      const reportText = `הדוח נוצר בהצלחה ב-${reportDate}!`;
      reportContent.innerHTML = `<p>${reportText}</p>`;
      reportSection.classList.remove("hidden");
      loadingSpinner.classList.remove("active");

      // Save report to local storage
      const reportItem = document.createElement("li");
      reportItem.textContent = reportText;
      reportItems.appendChild(reportItem);
      localStorage.setItem("reports", reportItems.innerHTML);
    }, 2000); // Simulate loading time
  });

  viewReportsButton.addEventListener("click", () => {
    reportsList.classList.toggle("hidden");
    // Load reports from local storage
    reportItems.innerHTML =
      localStorage.getItem("reports") || "<li>אין דוחות זמינים.</li>";
  });

  // Contact Form Submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formFeedback.innerHTML = "<p>תודה על ההודעה שלך! ניצור קשר בהקדם.</p>";
    formFeedback.classList.remove("hidden");
    contactForm.reset();
  });
});
