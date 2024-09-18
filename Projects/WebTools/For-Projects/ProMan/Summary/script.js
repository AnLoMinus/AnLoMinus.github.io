document
  .getElementById("fileInput")
  .addEventListener("change", handleFileSelect);
document
  .getElementById("loadFileBtn")
  .addEventListener("click", loadDefaultFile);
document.getElementById("saveFileBtn").addEventListener("click", saveFile);

let data = {};

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file && file.type === "application/json") {
    const reader = new FileReader();
    reader.onload = function (e) {
      data = JSON.parse(e.target.result);
      displayData(data);
    };
    reader.readAsText(file);
  } else {
    alert("אנא העלה קובץ JSON תקין.");
  }
}

function loadDefaultFile() {
  fetch("default.json") // Adjust the file path as necessary
    .then((response) => response.json())
    .then((json) => {
      data = json;
      displayData(data);
    })
    .catch((error) => console.error("שגיאה בטעינת קובץ ברירת מחדל:", error));
}

function displayData(data) {
  const generalInfo = document.getElementById("generalInfo");
  generalInfo.innerHTML = `
    <div class="grid-item">
        <div class="label">שם פרויקט:</div> 
        <input type="text" data-key="projectName" value="${
          data.projectName || ""
        }">
    </div>
    <div class="grid-item">
        <div class="label">תיאור פרויקט:</div> 
        <input type="text" data-key="projectDescription" value="${
          data.projectDescription || ""
        }">
    </div>
    <div class="grid-item">
        <div class="label">קטגוריה:</div>
        <select data-key="category">
            <option value="פיתוח" ${
              data.category === "פיתוח" ? "selected" : ""
            }>פיתוח</option>
            <option value="עיצוב" ${
              data.category === "עיצוב" ? "selected" : ""
            }>עיצוב</option>
            <option value="שיווק" ${
              data.category === "שיווק" ? "selected" : ""
            }>שיווק</option>
            <option value="מכירות" ${
              data.category === "מכירות" ? "selected" : ""
            }>מכירות</option>
        </select>
    </div>
    <div class="grid-item">
        <div class="label">תאריך התחלה:</div> 
        <input type="text" data-key="startDate" value="${data.startDate || ""}">
    </div>
    <div class="grid-item">
        <div class="label">תאריך סיום:</div> 
        <input type="text" data-key="endDate" value="${data.endDate || ""}">
    </div>
    <div class="grid-item">
        <div class="label">סטטוס פרויקט:</div>
        <select data-key="projectStatus">
            <option value="בהתקדמות" ${
              data.projectStatus === "בהתקדמות" ? "selected" : ""
            }>בהתקדמות</option>
            <option value="הושלם" ${
              data.projectStatus === "הושלם" ? "selected" : ""
            }>הושלם</option>
            <option value="לא התחיל" ${
              data.projectStatus === "לא התחיל" ? "selected" : ""
            }>לא התחיל</option>
        </select>
    </div>
    <div class="grid-item">
        <div class="label">רמת עדיפות:</div>
        <select data-key="priorityLevel">
            <option value="גבוהה" ${
              data.priorityLevel === "גבוהה" ? "selected" : ""
            }>גבוהה</option>
            <option value="בינונית" ${
              data.priorityLevel === "בינונית" ? "selected" : ""
            }>בינונית</option>
            <option value="נמוכה" ${
              data.priorityLevel === "נמוכה" ? "selected" : ""
            }>נמוכה</option>
            <option value="לא דחוף" ${
              data.priorityLevel === "לא דחוף" ? "selected" : ""
            }>לא דחוף</option>
            <option value="מיידי" ${
              data.priorityLevel === "מיידי" ? "selected" : ""
            }>מיידי</option>
        </select>
    </div>
    <div class="grid-item">
        <div class="label">מטרות:</div> 
        <input type="text" data-key="objectives" value="${
          data.objectives || ""
        }">
    </div>
    <div class="grid-item">
        <div class="label">שלב נוכחי:</div>
        <select data-key="currentPhase">
            <option value="תכנון" ${
              data.currentPhase === "תכנון" ? "selected" : ""
            }>תכנון</option>
            <option value="פיתוח" ${
              data.currentPhase === "פיתוח" ? "selected" : ""
            }>פיתוח</option>
            <option value="בדיקות" ${
              data.currentPhase === "בדיקות" ? "selected" : ""
            }>בדיקות</option>
            <option value="הטמעה" ${
              data.currentPhase === "הטמעה" ? "selected" : ""
            }>הטמעה</option>
            <option value="תחזוקה" ${
              data.currentPhase === "תחזוקה" ? "selected" : ""
            }>תחזוקה</option>
        </select>
    </div>
    <div class="grid-item">
        <div class="label">סיכונים:</div> 
        <input type="text" data-key="risks" value="${data.risks || ""}">
    </div>
    <div class="grid-item">
        <div class="label">תקציב:</div> 
        <input type="text" data-key="budget" value="${data.budget || ""}">
    </div>
`;

  // Update progress bar
  updateProgressBar(data);

  // Populate tasks table
  const tasksTable = document.getElementById("tasksTable");
  tasksTable.innerHTML = "";
  data.tasks.forEach((task, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><input type="text" data-key="tasks[${index}].name" value="${
      task.name || ""
    }"></td>
        <td>
            <select data-key="tasks[${index}].priority">
                <option value="גבוהה" ${
                  task.priority === "גבוהה" ? "selected" : ""
                }>גבוהה</option>
                <option value="בינונית" ${
                  task.priority === "בינונית" ? "selected" : ""
                }>בינונית</option>
                <option value="נמוכה" ${
                  task.priority === "נמוכה" ? "selected" : ""
                }>נמוכה</option>
                <option value="לא דחוף" ${
                  task.priority === "לא דחוף" ? "selected" : ""
                }>לא דחוף</option>
                <option value="מיידי" ${
                  task.priority === "מיידי" ? "selected" : ""
                }>מיידי</option>
            </select>
        </td>
        <td><input type="text" data-key="tasks[${index}].startDate" value="${
      task.startDate || ""
    }"></td>
        <td><input type="text" data-key="tasks[${index}].endDate" value="${
      task.endDate || ""
    }"></td>
        <td>
            <select data-key="tasks[${index}].status">
                <option value="לא התחיל" ${
                  task.status === "לא התחיל" ? "selected" : ""
                }>לא התחיל</option>
                <option value="בהתקדמות" ${
                  task.status === "בהתקדמות" ? "selected" : ""
                }>בהתקדמות</option>
                <option value="הושלם" ${
                  task.status === "הושלם" ? "selected" : ""
                }>הושלם</option>
            </select>
        </td>
    `;
    tasksTable.appendChild(row);
  });

  // Populate team table
  const teamTable = document.getElementById("teamTable");
  teamTable.innerHTML = "";
  data.team.forEach((member, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><input type="text" data-key="team[${index}].name" value="${
      member.name || ""
    }"></td>
        <td><input type="text" data-key="team[${index}].role" value="${
      member.role || ""
    }"></td>
        <td><input type="text" data-key="team[${index}].contact" value="${
      member.contact || ""
    }"></td>
    `;
    teamTable.appendChild(row);
  });
}

function updateProgressBar(data) {
  let progress = 0;
  switch (data.projectStatus) {
    case "בהתקדמות":
      progress = 50;
      break;
    case "הושלם":
      progress = 100;
      break;
    case "לא התחיל":
      progress = 0;
      break;
  }
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = `${progress}%`;
  progressBar.textContent = `${progress}%`;
  progressBar.style.backgroundColor = progress === 100 ? "#4CAF50" : "#FFC107"; // Green for completed, Yellow for in progress
}

function saveFile() {
  const editedData = {
    projectName: getValue("projectName"),
    projectDescription: getValue("projectDescription"),
    category: getValue("category"),
    startDate: getValue("startDate"),
    endDate: getValue("endDate"),
    projectStatus: getValue("projectStatus"),
    priorityLevel: getValue("priorityLevel"),
    objectives: getValue("objectives"),
    currentPhase: getValue("currentPhase"),
    risks: getValue("risks"),
    budget: getValue("budget"),
    tasks: Array.from(document.querySelectorAll("#tasksTable tr")).map(
      (row) => ({
        name: getValue("tasks[0].name", row),
        priority: getValue("tasks[0].priority", row),
        startDate: getValue("tasks[0].startDate", row),
        endDate: getValue("tasks[0].endDate", row),
        status: getValue("tasks[0].status", row),
      })
    ),
    team: Array.from(document.querySelectorAll("#teamTable tr")).map((row) => ({
      name: getValue("team[0].name", row),
      role: getValue("team[0].role", row),
      contact: getValue("team[0].contact", row),
    })),
  };

  const blob = new Blob([JSON.stringify(editedData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "project-data.json";
  a.click();
  URL.revokeObjectURL(url);
}

function getValue(key, context = document) {
  const element = context.querySelector(`[data-key="${key}"]`);
  return element ? element.value : "";
}
