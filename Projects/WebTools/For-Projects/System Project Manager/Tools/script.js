const phases = [
  {
    name: "שלב 1: הקמת עמותה/ארגון ללא מטרת רווח",
    tasks: [
      {
        name: "החלטה על שם הארגון",
        status: "לא התחיל",
        time: "יום",
        responsible: "אנונימי",
      },
      {
        name: "כתיבת תקנון",
        status: "בתהליך",
        time: "2 ימים",
        responsible: "אנונימי",
      },
      {
        name: "גיוס מייסדים",
        status: "לא התחיל",
        time: "3 ימים",
        responsible: "אנונימי",
      },
      {
        name: "הגשת בקשה לרישום עמותה",
        status: "לא התחיל",
        time: "יום",
        responsible: "אנונימי",
      },
    ],
  },
  {
    name: "שלב 2: רישום מול רשויות המס",
    tasks: [
      {
        name: 'פתיחת תיק במע"מ ומס הכנסה',
        status: "לא התחיל",
        time: "יום",
        responsible: "אנונימי",
      },
      {
        name: "בקשה להכרה כמוסד ציבורי",
        status: "לא התחיל",
        time: "2 ימים",
        responsible: "אנונימי",
      },
    ],
  },
  {
    name: "שלב 3: פיתוח אסטרטגיה בינלאומית",
    tasks: [
      {
        name: "הכרה בארגון ברמה בינלאומית",
        status: "לא התחיל",
        time: "3 ימים",
        responsible: "אנונימי",
      },
      {
        name: "שיתופי פעולה עם ארגונים דומים",
        status: "לא התחיל",
        time: "4 ימים",
        responsible: "אנונימי",
      },
    ],
  },
  {
    name: "שלב 4: השגת רישיונות לפעילות",
    tasks: [
      {
        name: "קבלת אישור ממשרד הבריאות",
        status: "לא התחיל",
        time: "יום",
        responsible: "אנונימי",
      },
      {
        name: "קבלת אישורים לפעילות חינוכית",
        status: "לא התחיל",
        time: "2 ימים",
        responsible: "אנונימי",
      },
    ],
  },
  {
    name: "שלב 5: הכנת תוכנית עסקית ומקורות מימון",
    tasks: [
      {
        name: "גיבוש תוכנית עסקית",
        status: "לא התחיל",
        time: "5 ימים",
        responsible: "אנונימי",
      },
      {
        name: "קבלת תמיכה ממענקים",
        status: "לא התחיל",
        time: "3 ימים",
        responsible: "אנונימי",
      },
    ],
  },
  {
    name: "שלב 6: פרסום והפצת המידע",
    tasks: [
      {
        name: "הקמת אתר אינטרנט",
        status: "לא התחיל",
        time: "3 ימים",
        responsible: "אנונימי",
      },
      {
        name: "יצירת קמפיינים ציבוריים",
        status: "לא התחיל",
        time: "4 ימים",
        responsible: "אנונימי",
      },
    ],
  },
];

let currentPhase = 0;
let taskBeingEdited = null;

document.addEventListener("DOMContentLoaded", function () {
  displayCarousel();
  displayTasks();
  updateProgressBar();
});

function displayTasks() {
  const tbody = document.getElementById("task-body");
  const tasks = phases[currentPhase].tasks;
  tbody.innerHTML = "";
  tasks.forEach((task, index) => {
    const statusClass = {
      "לא התחיל": "not-started",
      בתהליך: "in-progress",
      הושלם: "completed",
    }[task.status];
    const row = `<tr class="${statusClass}">
                  <td>${task.name}</td>
                  <td>${task.status}</td>
                  <td>${task.time}</td>
                  <td>${task.responsible}</td>
                  <td><input type="checkbox" ${
                    task.status === "הושלם" ? "checked" : ""
                  } onclick="toggleComplete(${index}, event)"></td>
                </tr>`;
    tbody.innerHTML += row;
  });
}

function displayCarousel() {
  const carouselInner = document.getElementById("carousel-inner");
  carouselInner.style.transform = `translateX(-${currentPhase * 100}%)`;
  document.getElementById("progress-indicator").textContent = `שלב ${
    currentPhase + 1
  } מתוך ${phases.length}`;
}

function prevSlide() {
  if (currentPhase > 0) currentPhase--;
  displayCarousel();
  displayTasks();
  updateProgressBar();
}

function nextSlide() {
  if (currentPhase < phases.length - 1) currentPhase++;
  displayCarousel();
  displayTasks();
  updateProgressBar();
}

function toggleComplete(index, event) {
  const task = phases[currentPhase].tasks[index];
  task.status = event.target.checked ? "הושלם" : "לא התחיל";
  displayTasks();
  updateProgressBar();
}

function updateProgressBar() {
  const tasks = phases[currentPhase].tasks;
  const completedTasks = tasks.filter((task) => task.status === "הושלם").length;
  const progress = (completedTasks / tasks.length) * 100;
  document.getElementById("progress-bar-inner").style.width = progress + "%";
  showNotification(`התקדמתם ${progress}%`);
}

function showNotification(message) {
  const notification = document.getElementById("progress-notification");
  notification.style.display = "block";
  notification.textContent = message;
  setTimeout(() => (notification.style.display = "none"), 3000);
}

function saveTasks() {
  const tasks = phases.flatMap((phase) => phase.tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showNotification("המשימות נשמרו בהצלחה");
}

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);
    tasks.forEach((task, index) => {
      const phaseIndex = Math.floor(index / 4);
      phases[phaseIndex].tasks[index % 4] = task;
    });
    displayTasks();
    showNotification("המשימות נטענו בהצלחה");
  }
}

function saveTaskEdit() {
  const task = phases[currentPhase].tasks[taskBeingEdited];
  task.name = document.getElementById("edit-task-name").value;
  task.time = document.getElementById("edit-task-time").value;
  task.responsible = document.getElementById("edit-task-responsible").value;
  closeModal();
  displayTasks();
}

function openModal(index) {
  taskBeingEdited = index;
  const task = phases[currentPhase].tasks[index];
  document.getElementById("edit-task-name").value = task.name;
  document.getElementById("edit-task-time").value = task.time;
  document.getElementById("edit-task-responsible").value = task.responsible;
  document.getElementById("task-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("task-modal").style.display = "none";
}

// פונקציה לייצוא הפרויקט ל-JSON
function exportProject() {
  const projectJSON = JSON.stringify(phases, null, 2); // מחרוזת JSON מסודרת
  const blob = new Blob([projectJSON], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "project.json"; // שם הקובץ שנשמר
  link.click();
}

// פונקציה לטעינת JSON מקובץ מקומי
function importProject(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const content = e.target.result;
    try {
      const loadedPhases = JSON.parse(content);
      phases.length = 0; // מנקה את המערך הנוכחי
      loadedPhases.forEach((phase) => phases.push(phase)); // מעדכן את ה-phases מהקובץ

      // עדכון התצוגה
      displayCarousel();
      displayTasks();
      updateProgressBar();
      showNotification("הפרויקט נטען בהצלחה מהקובץ");
    } catch (err) {
      showNotification("שגיאה בטעינת הקובץ");
      console.error("Error loading project:", err);
    }
  };
  reader.readAsText(file);
}
